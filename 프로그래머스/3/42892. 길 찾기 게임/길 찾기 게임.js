class Node {
    constructor(info){
        const [x,y,value] = info;
        
        this.x = x;
        this.y = y;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    
    add(newNode){
        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (newNode.x < current.x) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    
    getPreorder(){
        const answer = [];
        
        const dfs = (current) => {
            answer.push(current.value);
            
            if(current.left) dfs(current.left);
            
            if(current.right) dfs(current.right);
        }
        
        dfs(this.root)
        
        return answer;
    }
    
    getPostorder(){
        const answer = [];
        
        const dfs = (current) => {
            if(current.left) dfs(current.left)
            
            if(current.right) dfs(current.right)
            
            answer.push(current.value);
        }
        
        dfs(this.root);
        
        return answer;
    }
}

function solution(nodeinfo) {
    var answer = [[]];
    
    //1. nodeinfo에 번호까지 추가한 newNodeInfo
    const newNodeinfo = nodeinfo.map(([x,y],i) => [x,y,i+1]);
    
    //2. newNodeInfo를 다음과 같이 정렬한다
    //2-1. y값이 큰 순서
    //2-2. x값이 작은 순서
    newNodeinfo.sort((a,b) => {
        const [ax, ay] = a;
        const [bx, by] = b;
        
        if(ay !== by){
            return by - ay;
        }else{
            return ax - bx;
        }
    })
    
    
    //3. 위에서 정렬한 순서대로 트리에 노드를 추가한다.
    const tree = new Tree();
    newNodeinfo.forEach((info) => {
        
        const newNode = new Node(info);
        tree.add(newNode);
    })
    
    //4. 해당 트리를 전위 순회, 후위 순회한 값을 리턴한다.

    return [tree.getPreorder(), tree.getPostorder()];
}