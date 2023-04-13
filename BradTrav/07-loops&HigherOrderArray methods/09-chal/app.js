const students= [{ 
    id: 1, name: 'peter', 
    score: 80,
     favoriteSubject: 'math',
     },{ 
    id: 2, name: 'Bob', 
    score: 80,
     favoriteSubject: 'English',
     },{ 
    id: 3, name: 'Ramesh', 
    score: 70,
     favoriteSubject: 'Tamil',
     },{ 
    id: 4, name: 'Guru', 
    score: 50,
     favoriteSubject: 'math',
     },{ 
    id: 5, name: 'Sunny', 
    score: 60,
     favoriteSubject: 'math',
     }]

     
    const updatedStudents=students.map((student)=>{
        student['role']='student'
        return student

     })

    
   // console.log(updatedStudents)


    //
    const highScores=students.filter(student=>student.score>=80)

    console.log(highScores)
//
     const avg_Scores=students.reduce(function(acc,cur){
         return acc+cur.score
        
     },0)
//
      const avgScores=students.reduce((acc,cur)=>acc+cur.score,0)

    console.log(avgScores)

//

 const favSub=students.reduce((acc,cur)=>{
    if(acc[cur.favoriteSubject]){
       acc[cur.favoriteSubject]+=1
    }else{
        acc[cur.favoriteSubject]=1
    }
   
    //console.log(cur)
    return acc
},{})

   console.log(favSub)