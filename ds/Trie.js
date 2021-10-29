class TrieNode {
    constructor(char){
        this.char = char ? char : null;
        this.children = (new Array(26)).fill(null);
        this.isEow = false;
        //Prefix count at any point gives us how many words in the trie have the prefix
        this.prefix_count = 0;
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode();
    }
    getIndex(c){
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    addWord(key){
        let ptr = this.root;
        for (let i = 0; i < key.length; i++) {
            const index = this.getIndex(key[i]);
            if(!ptr.children[index]){
                ptr.children[index] = new TrieNode();
            }
            ptr = ptr.children[index];
            ptr.prefix_count++;
        }
        ptr.isEow = true;
    }
    search(key){
        let ptr = this.root;
        for (let i = 0; i < key.length; i++) {
            const index = this.getIndex(key[i]);
            if(!ptr.children[index]){
                return false;
            }
            ptr = ptr.children[index];
        }
        return ptr && ptr.isEow === true;
    }
    getPrefixCount(key) {
        let ptr = this.root;
        for (let i = 0; i < key.length; i++) {
            const index = this.getIndex(key[i]);
            if(!ptr.children[index]){
                return false;
            }
            ptr = ptr.children[index];
        }
        if(ptr){
            return ptr.prefix_count;
        }
        return 0;
    }
    removeUtil(node, key, depth) {
        if(depth === key.length){
            if(node.isEow){
                node.isEow = false;
            }
        }
    }
    remove(key) {

    }
    isLastNode(node){
        let children = node.children || [], empty = true;
        for (let i = 0; i < children.length; i++) {
            if(children[i]){
                empty = false;
            }
        }
        return empty;
    }
    getSuggestionsUtil(root, prefix) {
        if(root.isEow){
            this.getSuggestions.push(prefix);
        }
        if(!root || this.isLastNode(root)){
            return;
        }
        
        for (let i = 0; i < 26; i++) {
            if(root.children[i]){
                const char = String.fromCharCode(97 + i);
                prefix += char;
                this.getSuggestionsUtil(root, prefix);
                prefix = prefix.substring(0, prefix.length - 1);
            }
        }
    }
    getSuggestions(key) {
        this.suggestions = [];
        let ptr = this.root;
        for (let i = 0; i < key.length; i++) {
            const index = this.getIndex(key[i]);
            if(!ptr.children[index]){
                return [];
            }
            ptr = ptr.children[index];
        }
        if(ptr){
            this.getSuggestionsUtil(ptr, key);
        }
        return this.suggestions;
    }
}

let t = new Trie();

t.addWord('amazon');
t.addWord('amazing');
t.addWord('facebook');
t.addWord('google');
t.addWord('microsoft');

console.log(t.getSuggestions('ama'));