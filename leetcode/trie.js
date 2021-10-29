/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * Initialize your data structure here.
 */
var Trie = function() {
    this.children = new Array(26);
    this.eow = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var root = this;
    for (let i = 0; i < word.length; i++) {
        var index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!root.children[index]){
            var node = new Trie();
            root.children[index] = node;
        }
        
        if(i === word.length - 1){
            root.children[index].eow = true;
        }else {
            root = root.children[index];
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var root = this;
    for (let i = 0; i < word.length; i++) {
        var index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!root.children[index]){
            return false;
        }
        
        if(i === word.length - 1){
            return root.children[index].eow === true;
        }else {
            root = root.children[index];
        }
    }

    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var root = this;
    for (let i = 0; i < prefix.length; i++) {
        var index = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!root.children[index]){
            return false;
        }
        root = root.children[index];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */