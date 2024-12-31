/*
MongoDB provides logical operators to combine or invert query conditions, enabling more complex filtering.

1. $and: Matches documents that satisfy all the specified conditions.
    Syntax: { $and: [ { condition1 }, { condition2 }, ... ] }

2. $or: Matches documents that satisfy at least one of the specified conditions.
    Syntax: { $or: [ { condition1 }, { condition2 }, ... ] }

3. $not: Inverts the result of the specified query condition.
    Syntax: { field: { $not: { condition } } }

4. $nor: Matches documents that fail all the specified conditions.
    Syntax: { $nor: [ { condition1 }, { condition2 }, ... ] }
*/