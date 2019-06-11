function userData() {


    let weight = document.getElementById('weight-data').value;
    console.log('weight:', weight);

    let hight = document.getElementById('hight-data').value;
    console.log('hight:', hight);

    let age = document.getElementById('age-data').value;
    console.log('age:', age);
    
    let ectomorfo = document.getElementById('ectomorfo').checked;
    console.log('ectomorfo:', ectomorfo);
    
    let mesomorfo = document.getElementById('mesomorfo').checked;
    console.log('mesomorfo:', mesomorfo);

    let endomorfo = document.getElementById('endomorfo').checked;
    console.log('endomorfo:', endomorfo);

    let week = document.getElementById('user-data-week').value - 1;
    let weekDisplay = document.querySelectorAll('.user-data-result ul');
    
    let eachCalc = document.querySelectorAll('.user-data-result ul')[week];

    let eachCalcResult = eachCalc.querySelectorAll('li');
    console.log(eachCalcResult);

    let eachCalcText = eachCalcResult[0].querySelectorAll('p')[1].innerHTML;
    console.log(eachCalcText);

      if (ectomorfo === true) {
        
        let carb = [5.8, 5.8, 7, 7, 8, 8, 7, 7, 4.8, 4.8, 4, 6.2];
        let prot = [2,2,2,2,2,2,2,2,3,3,2.5,1];
        let fat = [1,1,1,1,1,1,1,1,1,1,1,0.7];
        let carbProtKcal = 4;
        let fatKcal = 9;
        
        let carbResult = carb[week] * weight;
        console.log("carbResult", carbResult);

        let protResult = prot[week] * weight;
        console.log("protResult", protResult);

        let fatResult = fat[week] * weight;
        console.log("fatResult", fatResult);

        let kcalResult = (carbResult + protResult) * carbProtKcal + fatResult * fatKcal;
        
        eachCalcResult[0].querySelectorAll('p')[1].innerHTML = carbResult + ' g';
        eachCalcResult[1].querySelectorAll('p')[1].innerHTML = protResult + ' g';
        eachCalcResult[2].querySelectorAll('p')[1].innerHTML = fatResult + ' g';
        eachCalcResult[3].querySelectorAll('p')[1].innerHTML = kcalResult + ' kcal';

    } else if (mesomorfo === true) {
        console.log('estou aqui ectomorfo');
        let carb = [4.5,4.5,5.3,5.3,5.8,5.8,5.3,5.3,3.9,3.9,3.7,5];
        let prot = [2,2,2,2,2,2,2,2,2.6,2.6,2.3,1];
        let fat = 1;
        let carbProtKcal = 4;
        let fatKcal = 9;
        
        let carbResult = carb[week] * weight;
        console.log("carbResult", carbResult);

        let protResult = prot[week] * weight;
        console.log("protResult", protResult);

        let fatResult = fat * weight;
        console.log("fatResult", fatResult);

        let kcalResult = (carbResult + protResult) * carbProtKcal + fatResult * fatKcal;
        
        eachCalcResult[0].querySelectorAll('p')[1].innerHTML = carbResult + ' g';
        eachCalcResult[1].querySelectorAll('p')[1].innerHTML = protResult + ' g';
        eachCalcResult[2].querySelectorAll('p')[1].innerHTML = fatResult + ' g';
        eachCalcResult[3].querySelectorAll('p')[1].innerHTML = kcalResult + ' kcal';
    } else if (endomorfo === true) {
        console.log('estou aqui ectomorfo');
        let carb = [3.3,3.3,3.8,3.8,4.5,4.5,4,4,4,3.3,3.3,3,3.5];
        let prot = [2,2,2,2,2,2,2,2,2,2,1.5,1];
        let fat = 1;
        let carbProtKcal = 4;
        let fatKcal = 9;
        
        let carbResult = carb[week] * weight;
        console.log("carbResult", carbResult);

        let protResult = prot[week] * weight;
        console.log("protResult", protResult);

        let fatResult = fat * weight;
        console.log("fatResult", fatResult);

        let kcalResult = (carbResult + protResult) * carbProtKcal + fatResult * fatKcal;
        
        eachCalcResult[0].querySelectorAll('p')[1].innerHTML = carbResult + ' g';
        eachCalcResult[1].querySelectorAll('p')[1].innerHTML = protResult + ' g';
        eachCalcResult[2].querySelectorAll('p')[1].innerHTML = fatResult + ' g';
        eachCalcResult[3].querySelectorAll('p')[1].innerHTML = kcalResult + ' kcal';
    }

    // weekDisplay.forEach(()=> {
    //     let counter = week++;
    //     weekDisplay[counter].classList.remove('inactive');
    // })

    weekDisplay[week].classList.remove('inactive');
}

const userDataDisplay = document.getElementsByClassName('user-data');
const userResult = document.getElementsByClassName('user-data-result');

function activeCalc(){
    userResult[0].classList.remove('inactive');
    userDataDisplay[0].classList.add('inactive');
}



