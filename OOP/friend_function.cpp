class Node
{
private:
  int key;
  Node *next;
  
  /* Other members of Node Class */
  friend int LinkedList::search(); // Only search() of linkedList 
                                  // can access internal members
};
