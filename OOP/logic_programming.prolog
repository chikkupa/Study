grandparent(X,Z) :- parent(X,Y), parent(Y,Z).
parent(X, Y) :- father(X, Y).
parent(X, Y) :- mother(X, Y).

father(John, Lily).
mother(Kathy, Lily)
father(Ken, Karen).
mother(Lily, Bill)

?- grandparent(John, Bill).
Answer is YES
?- grandparent(Q, Bill).
Answer
Q = John
Q = Kathy
