fh = open("memelist.txt", "r")
fo = open("memearray.txt", "w")
data = fh.readlines()
words = "["
for line in data:
	words += "\""+ line[:-1] +"\", "
words = words[:-2]
words += "]"
fo.writelines(words)
fo.close()
fh.close()
print words