# Chapter II. Thread safety #
* Thread safety is about concurrently accessing **shared**, **mutable**, **state**
    * Shared - it's accessible from **more than one thread**
    * Mutable - its value **could be changed** during its lifetime
    * State - any **instance or static fields** which contain any of the object's behaviour
* Whenever** more than one thread** accesses a given state variable, and **one** of them might **write** to it, they **all must** coordinate their access to it using **synchronization**.
* There are **three options** when dealing with threads:
    * **Don't share** the state
    * Make the **state immutable**
    * **Use synchronization** everytime you access a state variable
* A class is thread safety, if it behaves correctly when accessed from multiple threads. They encapsulate any needed synchronization so that clients need not provide their own.
* Very often, **thread safety requirements** do not stem from a desire to use threads directly, but from using a **framework/technology which calls our components from multiple threads**.
* **Stateless** objects are **always thread-safe**.
* Race conditions - operations from **multiple threads interleave** and act on the same state without synchronization. Very typical with **compound actions**, or **check-then-act** actions.
* To preserve state consistency, **update related state variables in a single atomic operation**.
* Synchronized blocks lock on some **intrinsic lock** (this - for instance methods, Class - for static methods)
* Intrinsic locks are **reentrant** - if a thread A has a lock and tries to call another method which synchronizes on the same lock, then this is successful.
* For **each mutable state variable** accessed by more than one thread, all accesses to this variable must be performed with the** same lock** held, and one lock only.
* For **every invariant that involves more than one variable**, all the variables involved in that invariant must be guarded by the **same lock**.


# Chapter III. Sharing objects #
* In the **absence of synchronization**, the compiler, processor, runtime can **change the order of execution** in a program, which can lead to unexpected results.
* To ensure that all threads see the most **up to date values** of shared mutable variables, the reading and writing threads must **synchronize on the same lock**.
* **Locking** can guarantee both **visibility and atomicity**. **Volatile** variables can guarantee **only visibility**.
* **Thread confinement** is another way of avoiding the need for synchronization:
    * Thread confinement
    * Stack confinement
    * ThreadLocal
* Immutability - **immutable objects are always thread safe**.
* An object is **immutable** if:
    * Its **state cannot be modified** after construction
    * **All** its **fields** are **final**
    * The 'this' doesn't escape during construction
* Note: A thread can still replace a reference of an immutable object with another reference of the same immutable object, this does not mean that object is not immutable and it's perfectly ok.
* It's good practice to make all fields final, unless they need to be modified.
* **Improper publication** of objects (object reference) can make a thread observe a **stale value** for the object (reference), or worse, an up to date value for the object (reference) but **stale state**.
* **Immutable objects** can be used safely by any thread **without additional synchronization**, even when synchronization is not used to publish them.
* **Mutable objects must be safely published** for threads to see their reference and state correctly, unlike immutable objects which are viewed correctly by default.
* To **safely publish** an object, its reference and state must be made visible at the same time by:
    * Initializing an object reference from a static initializer
    * Storing a reference to it, into a **volatile** field or **AtomicReference**
    * Storing a reference to it, into a **final** field of a properly constructed object
    * Storing a reference to it, into a field that is properly **guarded by a lock**
* Safely published effectively immutable objetcs (whose state doesn't change, we don't write to it) can be used by any thread without additional synchronization.
* The publication requirements for an object depend on its mutability:
    * Immutable objects can be published through any mechanism.
    * **Effectively immutable** objects must be **safely published**.
    * **Mutable** objects must be **safely published** and must be either thread safe or guarded by a lock.
* The most **useful policies when sharing objects in a concurrent program are:
    * Thread-confined: A thread confined object is owned exclusively by and confined to one thread, and can be modified by its owning thread.
    * Shared read-only: A shared read-only object can be accessed concurrently by multiple threads without additional synchronization,but cannot be modified by any thread. Shared read-only objects include immutable and effectively immutable objects. Effectively immutable objects must be safely published though.
    * Shared thread-safe: A thread-safe object performs synchronization internally, so multiple threads can freely access it through its public interface without further synchronization.
    * Guarded: A guarded object can be accessed only with a specific lock held. Guarded objects include those that are encapsulated within other thread-safe objects and published objects that are known to be guarded by a specific lock.

# Chapter IV. Sharing objects #

* The design process for a thread safe class should include these three basic elements:
    * Identify the **variables** that form the **object's state**
    * Identify the **invariants** that constraint the state variables
    * Establish a **policy** for amanaging **concurrent access** to the object's state
* You cannot ensure thread safety whitout understanding an object's **invariants and postconditions**. Constraints on the valid values or state transitions for state variables can create atomicity and encapsulation requirements.
* **Encapsulating** data within an object confines access to the data to the object's methods, making it **easier** to ensure that the data is always accessed with the **appropriate lock hold**
* If a state **variable is thread-safe**, does **not** participate in any **invariants that constrain its value** and has no prohibited state transition for any of its operations, then it can be **safely published**.
* **Special care** needs to be paid when **adding state** to an existing thread safe class, new invariants may appear and often new synchronization is neded to maintain thread-safety.
* Don't publish references to mutable state which is not thread-safe.

# Chapter V. Building blocks #

* Replacing synchronized collections with **concurrent collections** can offer dramatic **scalability** improvements with little risk.
* **Concurrent collections** do **not** throw **ConcurrentModificationException** if we remove elements from them while iterating.
* **Bounded queues** are a powerful resource managemenet tool for building reliable applications. They make your program more **robust** to overload by throtling activities that threaten to produce more work than can be handled.
* When **code throws InterruptedException**, the interrupted flag is cleared, there are basically 2 choices we have:
    * **Restore** the interrupted thread.
    * **Rethrow** the exception.




