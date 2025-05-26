function solution(genres, plays) {
    var answer = [];
    
    const musics = [];
    
    const genrePlayTimeMap = new Map();
    
    for(let i = 0; i < genres.length; i++){
        const temp = {
            id: i,
            genre: genres[i],
            play: plays[i]
        }
        
        genrePlayTimeMap.set(genres[i], (genrePlayTimeMap.get(genres[i]) || 0) + plays[i])
        
        musics.push(temp);
    }
    
    console.log(genrePlayTimeMap);
    console.log(musics);
    
    while(genrePlayTimeMap.size > 0){
        let temp = 0;
        let biggestGenre = "";
        
        genrePlayTimeMap.forEach((value, key) => {
            if(value > temp){
                temp = value;
                biggestGenre = key;
            }
        })
        
        genrePlayTimeMap.delete(biggestGenre);
        
        const filteredOrderedMusics = musics.filter((music) => music.genre === biggestGenre).sort((a,b) => b.play - a.play);
        
        answer.push(filteredOrderedMusics[0].id);
        
        if(filteredOrderedMusics[1]){
            answer.push(filteredOrderedMusics[1].id);
        }
        
        
    }
    
    
    return answer;
}   