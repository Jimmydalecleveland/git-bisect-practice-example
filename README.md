# git-bisect-practice-example
A project for demonstrating and practicing git bisect. Code comes from Fowlers Refactoring book.

## Commands and order
1. Start the bisect process
```
git bisect start
```

2. Declare the current commit (or known bad commit if you are not on it)
```
git bisect bad
```

3. Declare the first known good commit (this is the initial commit in this example, you can also use tags I believe)
```
git bisect good 7ace8bed2d59a8189e939a21c5651ec52293ecf7
```

4. The process begins and you enter `git bisect good` for good commits and `git bisect bad` for bad commits, after running your code and determining the state of the current revision.

Repeat step 4 until git declares the origin of the bad code.

View all commits that have been processed and their good/bad status
```
git bisect log
```

5. To end the bisect process:
```
git bisect reset
```
