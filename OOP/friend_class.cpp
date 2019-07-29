
class Node
{
private:
  int key;
  Node *next;
  /* Other members of Node Class */
  
  friend class LinkedList; // Now class  LinkedList can 
                           // access private members of Node
};
