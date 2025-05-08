class Node{
    constructor(char){
        this.children = new Map();
        this.count = 0;
        this.char = char;
    }
}

class Trie{
    constructor(){
        this.root = new Node("*");
    }
    
    insert(word){
        let currNode = this.root;
        
        for(const char of word){
            if(!currNode.children.has(char)){
                const newNode = new Node(char);
                currNode.children.set(char, newNode);
            }
            currNode = currNode.children.get(char);
            currNode.count += 1;            
        }
    }
    
    getPrefixLength(word){
        let currNode = this.root;
        let length = 0;
        
        for(const char of word){
            currNode = currNode.children.get(char);
            length++;
            if(currNode.count === 1) break;
        }
        
        return length;
    }
}


function solution(words) {
    const trie = new Trie();
    
    words.forEach((word) => {
        trie.insert(word);
    })
    
    let answer = 0;
    
    words.forEach((word) => {
        answer += trie.getPrefixLength(word);
    })
    
    return answer;
}