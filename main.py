class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size

    "Setting a hash function with unicode"
    def _hash(self, key):
      return  sum(ord(c) for c in str(key)) % self.size

    "setting up an insert function"
    def _put(self, key, value):
        "Inserting key-value pair"
        index = self._hash(key)
        if self.table[index] is None:
            self.table[index] = []

        "handling collision"
        for pair in self.table[index]:
            if pair[0] == key:
                pair[1] = value
                return

        self.table[index].append([key, value])

    def _get(self, key):
        index = self._hash(key)
        if self.table[index] is not None:
            for pair in self.table[index]:
                if pair[0] == key:
                    return pair[1]
        return None

    def _delete(self, key):
        index = self._hash(key)
        if self.table[index] is not None:
            for i, pair in enumerate(self.table[index]):
                if pair[0] == key:
                    del self.table[index][i]
                    return True
        return False


ht = HashTable()
ht._put("apple", 10)
ht._put("mango", 30)
ht._put("pineapple", 50)

print(ht._get("mango"))
ht._delete("apple")
print(ht._get("apple"))