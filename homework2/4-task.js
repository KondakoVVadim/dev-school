function unpackSausages(truck) {
  sausage = []
  for (const i of truck){
    for (const j of i){
      if (j[0] === "[" && j[j.length - 1] === "]"){
        if (j[1]===j[2] && j[2]===j[3] && j[3]===j[4]){
          sausage.push(j.slice(1,-1))
        }
      }
    }
  }
      let sausageNew = []
    let count = 0
    for (let i = 0; i < sausage.length; i++){
      count++
      if (count % 5 !== 0){
        sausageNew.push(sausage[i])
      }
    }
  return sausageNew.join('').split('').join(' ')
}
const truck = [["[IIII]", "[║║║║]", "[1-11]"],["[IIII]", "[║║║║]", "[1-11]"],["[IIII]", "[║║║║]", "[1-11]"],["[IIII]", "[║║║║]", "[1-11]"]]
console.log(unpackSausages(truck))
