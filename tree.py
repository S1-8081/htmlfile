class Node:
    def __init__(self,x):
        self.left=None
        self.data=x
        self.right=None

class Tree:
    def __init__(self):
        self.root=None
    
    def insert(self,x):
        if(self.root==None):
            self.root=Node(x)
        else:
            curr=self.root
            while(curr!=None):
                if(x<curr.data):
                    if(curr.left==None):
                        curr.left=Node(x)
                        break
                    else:
                        curr=curr.left
                else:
                    if(curr.right==None):
                        curr.right=Node(x)
                        break
                    else:
                        curr=curr.right
    
    def preorder(self,R):
        if(R==None):
            return
        print(R.data,end=' ')
        self.preorder(R.left)
        self.preorder(R.right)
    
    def inOrder(self,R):
        if(R==None):
            return
        self.inOrder(R.left)
        print(R.data,end=' ')
        self.inOrder(R.right)
        
    def postOrder(self,R):
        if(R==None):
            return
        self.postOrder(R.left)
        self.postOrder(R.right)
        print(R.data,end=' ')

a=Tree()
a.insert(10)
a.insert(50)
a.insert(60)
a.insert(20)
a.insert(5)
a.insert(45)
a.insert(23)
a.preorder(a.root)
print()
a.inOrder(a.root)
print()
a.postOrder(a.root)
