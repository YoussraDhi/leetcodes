
  //Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// check each level of the tree
// store each node in a queue (First in first out)
// see if node has children
// then move to next level 

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0

    let depth = 0
    let queue = [root]

    while (queue.length) {
        let len = queue.length
        for( let i = 0; i < len ; i++) {
            let current = queue.shift()
            if (current) {
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
        }
        depth++ // icrement depth on next level 
    }
    return depth
};