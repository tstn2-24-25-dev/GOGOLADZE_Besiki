text = "Exo1_score_de_Scrabble/t.txt"

with open (text, 'r') as t:
    data = t.read() # i changed readlines with read, cause i use strip() and splitlines() functions
    
# import data from t.txt 👆


def calc_score(words, scores):
    score = 0
    
    for word in words:
        score += scores.get(word, 0)
    return score
        

    
def letters_def(data):
    
    lines = data.strip().splitlines()
    map_scores = lines[0].split()
    
    scores = {}
    
    for i in range (0, len(map_scores), 2):
        letter = map_scores[i]
        score = int(map_scores[i+1])
        scores[letter] = score
    
    words = lines[1:]
    scores_mots = [(word, calc_score(word, scores)) for word in words]
    
    mots_tries = sorted(scores_mots, key=lambda x: (-x[1], words.index(x[0])))
    
    for word, score in mots_tries:
        print(word)
        

# data local 👇

# data = """a 1 b 3 c 3 d 2 e 1 f 4 g 2 u 1
# cafe
# button
# face
# bad
# zebra
# bug"""

letters_def(data)
