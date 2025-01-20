    const button = document.getElementById('btn');
    const order = document.querySelector('.order');
    const order1 = document.querySelector('.order1');
    const order3 = document.querySelector('.order3');
    const box = document.querySelector('.box');
    const typing = document.querySelector('.typing');
    const intro = document.querySelector('.intro');
    const input = document.getElementById('guess');
    const input1 = document.getElementById('guesslv1');
    const input3 = document.getElementById('guesslvl3');
    const submit = document.getElementById('submit');
    const submitlvl1= document.getElementById('submitlv1');
    const submitlvl3= document.getElementById('submitlvl3');
    const word = document.querySelector('.word')
    const wordslvl1= document.querySelector('.wordslvl1 ')
    const wordslvl3= document.querySelector('.wordslvl3 ')
    const f1 = document.getElementById('f1');
    const f2 = document.getElementById('f2');
    const f3 = document.getElementById('f3');
    const f4 = document.getElementById('f4');
    const l1f1 = document.getElementById('l1f1');
    const l1f2 = document.getElementById('l1f2');
    const l1f3 = document.getElementById('l1f3');
    const l1f4 = document.getElementById('l1f4');
    const l3f1 = document.getElementById('l3f1');
    const l3f2 = document.getElementById('l3f2');
    const l3f3 = document.getElementById('l3f3');
    const l3f4 = document.getElementById('l3f4');
    const l3f5 = document.getElementById('l3f5');
    const face = document.querySelector('.face');
    const tire1 = document.querySelector('.tire1');
    const tire2 = document.querySelector('.tire2');
    const base = document.querySelector('.base');
    const lefthand = document.querySelector('.lefthand');
    const righthand = document.querySelector('.righthand');
    const leftleg = document.querySelector('.leftleg');
    const rightleg = document.querySelector('.rightleg');
    const wire1 = document.querySelector('.wire1');
    const wire11 = document.querySelector('.wire11');
    const wirelong = document.querySelector('.wirelong');
    const result = document.querySelector('.result')
    const resultlvl1 = document.querySelector('.resultlvl1')
    const resultlvl3 = document.querySelector('.resultlvl3')
    const agree= document.getElementById('agree')
    const agreee= document.getElementById('agreee')
    const agreeelvl1= document.getElementById('agreeelvl1')
    const agreeelvl3= document.getElementById('agreeelvl3')
    const warning= document.querySelector('.warning')
    const warning1= document.querySelector('.warning1') 
    const warning3= document.querySelector('.warning3') 
    const hint=document.getElementById('Hint')
    const hintlvl1=document.getElementById('Hintlvl1')
    const hintlvl3=document.getElementById('Hintlvl3')
    const gameAudio = document.getElementById("gameAudio");
    const levels=document.querySelector('.levels')
    const easy = document.querySelector('.easy')
    const medium= document.querySelector('.medium')
    const hard= document.querySelector('.hard')
    const failure= document.querySelector('.failure')
    const success= document.querySelector('.success')
    const registera= document.getElementById('REGISTERa');
    const signup= document.querySelector('.signup')
    const signin= document.querySelector('.signin')
    const signingin= document.getElementById('signingin')
    const signingup= document.getElementById('signingup')
    const level1=document.querySelector('.level1')
    const level3=document.querySelector('.level3')
    const agreelvl1= document.getElementById('agreelvl1')
    const agreelvl3= document.getElementById('agreelvl3')
    const fail= document.getElementById('fail')
    const back = document.getElementById('back')
    const signupInput= document.getElementById('sign')
    const signinInput= document.getElementById('signin')
    const array = [face, wire1, wire11, tire1, tire2, base, lefthand, righthand, leftleg, rightleg,wirelong];
    const words = [
        {
            word1: 'fire',
            wordd: 'fire',
            hint: 'I can warm you or burn you; I dance but cannot walk.'
        },
        {
            word1: 'King',
            wordd: 'king',
            hint: 'I wear a crown, rule a land, and am often found in tales of old.'
        },
        {
            word1: 'hand',
            wordd: 'hand',
            hint: 'I have fingers but cannot point; I help you hold things tight.'
        },
        {
            word1: 'wipe',
            wordd: 'wipe',
            hint: 'I can remove dirt or tears, but I am not a cloth.'
        },
        {
            word1: 'wire',
            wordd: 'wire',
            hint: 'I connect things together, but I am not a glue.'
        }
    ];

    const wordlvl1 = [
        {
            word1: 'game',
            wordd: 'game',
            hint: 'I can be played alone or with others; I often have rules to follow.'
        },
        {
            word1: 'time',
            wordd: 'time',
            hint: 'I am measured ; I never stop moving.'
        },
        {
            word1: 'hint',
            wordd: 'hint',
            hint: 'I am a little clue that helps you find your way; I can be subtle or clear.'
        },
        {
            word1: 'lose',
            wordd: 'lose',
            hint: 'I happen when you fail to keep something; I can make you feel sad.'
        },
        {
            word1: 'vary',
            wordd: 'vary',
            hint: 'I can change in size, amount, or degree; I make things interesting.'
        }
    ];
    const wordLvl3 = [
        {
            word1: 'chair',
            wordd: 'chair',
            hint: 'I have four legs but cannot walk; I help you rest your back.'
        },
        {
            word1: 'board',
            wordd: 'board',
            hint: 'I can be found in classrooms and meetings; I hold ideas but am not alive.'
        },
        {
            word1: 'ethic',
            wordd: 'ethic',
            hint: 'I guide your decisions of right and wrong; I’m often discussed but not seen.'
        },
        {
            word1: 'topic',
            wordd: 'topic',
            hint: 'I am the subject of conversation; I can spark debate or curiosity.'
        },
        {
            word1: 'share',
            wordd: 'share',
            hint: 'I am what you do with your friends; I can be a moment, an item, or a thought.'
        },
        {
            word1: 'bridge',
            wordd: 'bridge',
            hint: 'I connect two sides but am not a road; I can help you cross from one place to another.'
        }
    ];
    let incorrect = 0;
    let tryWords= 0;
    let pointlvl1=0;
    let pointlvl2=0;
    let pointlvl3=0;
    submitlvl1.disabled=true;
    submit.disabled=true;
    submitlvl3.disabled=true;
    function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
    }
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Check if success or failure messages are displayed
            if (success.style.display === 'block' || failure.style.display === 'block') {
                return; // Prevent any submissions if messages are displayed
            }
    
            // Check which level is active and trigger the corresponding submit function
            if (submitlvl1.style.display === 'block') {
                submitlvl1.click(); // Simulate click on submitlvl1
            } else if (submitlvl3.style.display === 'block') {
                submitlvl3.click(); // Simulate click on submitlvl3
            } else if (submit.style.display === 'block') {
                submit.click(); // Simulate click on submit
            }
        }
    }); 
    medium.onclick= function(){
    warning.style.display='block'
    levels.style.display='none'

    }
    easy.onclick= function(){
    warning1.style.display='block'
    levels.style.display='none'
    tryWords=0;
    incorrect
    }
    hard.onclick= function(){
    warning3.style.display='block'
    levels.style.display='none'
    tryWords=0;
    incorrect
    }
    // document.addEventListener('keydown', function(event) {
    //             if (event.key === 'Enter') {
        
    //                 button.click();
    //             }
    //         });
    button.onclick = function start() {
        shuffleArray(words); 
        shuffleArray(wordlvl1); 
        shuffleArray(wordLvl3); 
        gameAudio.play();  
        levels.style.display = 'flex';
        warning.style.display = 'none';
        intro.style.display = 'none';
        button.style.display = 'none';
        typing.style.display = 'none';
        button.disabled = true; 
    // document.addEventListener('keydown', function(event) {
    //         if (event.key === 'Enter') {
            
    //             agree.click();
    //         }
    //     });

    }
    agree.onclick= function(){
        order.style.display = 'block';
        intro.style.display = 'none';
        box.style.display = 'block';
        button.style.display = 'none';
        typing.style.display = 'block';
        typing.innerHTML = 'PLAYER NOW YOU ARE LEVEL 2';
        input.style.display='block'
        word.style.display='block'
        submit.style.display='block'
        warning.style.display='none'
        hint.style.display='block';
        agree.disabled='true'
        submit.disabled=false;
        
   
    } 

    hint.onclick= function (){
        
        const give=words[tryWords].hint;
        alert(give)
    }
    agreelvl1.onclick= function(){
        warning1.style.display='none'
        order1.style.display = 'block';
        intro.style.display = 'none';
        box.style.display = 'block';
        button.style.display = 'none';
        typing.style.display = 'block';
        typing.innerHTML = 'PLAYER NOW YOU ARE LEVEL 1';
        input1.style.display='block'
        wordslvl1.style.display='block'
        submitlvl1.style.display='block'
        level1.style.display='block'
        hintlvl1.style.display='block';
        agree.disabled='true'
        submitlvl1.disabled=false;
        
    
    }
    agreelvl3.onclick= function(){
        warning3.style.display='none'
        order3.style.display = 'block';
        intro.style.display = 'none';
        box.style.display = 'block';
        button.style.display = 'none';
        typing.style.display = 'block';
        typing.innerHTML = 'PLAYER NOW YOU ARE LEVEL 3';
        input3.style.display='block'
        wordslvl3.style.display='block'
        submitlvl3.style.display='block'
        level1.style.display='block'
        hintlvl3.style.display='block';
        agree.disabled='true'
        submitlvl3.disabled=false;
   

    } 



    submit.onclick = function lvl2() {
    
        
        const guess = input.value.toLowerCase();
        input.value = '';
        submit.disabled = true;
        if(tryWords<=words.length){
            if (guess === words[tryWords].word1[0]) {
            f1.innerHTML = words[tryWords].word1[0];
        } else if (guess === words[tryWords].word1[1]) {
            f2.innerHTML = words[tryWords].word1[1];
        } else if (guess === words[tryWords].word1[2]) {
            f3.innerHTML = words[tryWords].word1[2];
        } else if(guess === words[tryWords].word1[3]) {
            f4.innerHTML = words[tryWords].word1[3];
        }
        else if(guess===''){
            alert('enter the letter first')
        }
        else if (tryWords>words.length){
            alert('you made it')
        }
        else if(guess===words[tryWords].wordd) {
                input.style.display-'none'
        word.style.display='none'
        submit.style.display='none'
        order.style.display = 'none';
        intro.style.display = 'none';
        box.style.display = 'none';
        button.style.display = 'none';
        typing.style.display = 'none';
        input.style.display='none';
        result.style.display='block';
        hint.style.display='none'
            }
            else {
    if (incorrect >= array.length) {
            input.style.display-'none'
        word.style.display='none'
        submit.style.display='none'
        order.style.display = 'none';
        intro.style.display = 'none';
        box.style.display = 'none';
        button.style.display = 'none';
        typing.style.display = 'none';
        input.style.display='none';
    
        hint.style.display='none'
            failure.style.display='block'
            submit.style.display='none'
            submit.disabled='true'
            
           
        } else {
            array[incorrect].style.display = 'block';
            incorrect++;
        }


            }
        }

    submit.disabled = false;
        }
        
        hintlvl1.onclick= function(){
            l1f1.innerHTML=wordlvl1[tryWords].word1[0];
            const give=wordlvl1[tryWords].hint;
        alert(give)
        
        }
        submitlvl1.onclick = function lvl1() {
            const guess = input1.value.toLowerCase();
            input1.value = '';
            submitlvl1.disabled = true;
        
            if (tryWords < wordlvl1.length) {
                if (guess === wordlvl1[tryWords].word1[0]) {
                    l1f1.innerHTML = wordlvl1[tryWords].word1[0];
                } else if (guess === wordlvl1[tryWords].word1[1]) {
                    l1f2.innerHTML = wordlvl1[tryWords].word1[1];
                } else if (guess === wordlvl1[tryWords].word1[2]) {
                    l1f3.innerHTML = wordlvl1[tryWords].word1[2];
                } else if (guess === wordlvl1[tryWords].word1[3]) {
                    l1f4.innerHTML = wordlvl1[tryWords].word1[3];
                } else if (guess === '') {
                    alert('Enter the letter first');
                } 
                else if (guess === wordlvl1[tryWords].wordd) {
                    // User guessed the complete word
                    input1.style.display = 'none';
                    wordslvl1.style.display = 'none';
                    submitlvl1.style.display = 'none';
                    order1.style.display = 'none';
                    intro.style.display = 'none';
                    typing.style.display='none'
                        hintlvl1.style.display='none';
                    box.style.display = 'none';
                    button.style.display = 'none';
                    resultlvl1.style.display = 'block'; // Show success message for level 1
                } else {
                    if (incorrect >= array.length) {
                        // User has run out of incorrect guesses
                        input1.style.display = 'none';
                        wordslvl1.style.display = 'none';
                        submitlvl1.style.display = 'none';
                        order1.style.display = 'none';
                        intro.style.display = 'none';
                        box.style.display = 'none';
                        button.style.display = 'none';
                        typing.style.display='none'
                        hintlvl1.style.display='none';
                        failure.style.display = 'block'; // Show failure message for level 1
                        submitlvl1.disabled = true;
                    } else {
                        array[incorrect].style.display = 'block';
                        incorrect++;
                    }
                }
            }
            submitlvl1.disabled=false;
        }
        submitlvl3.onclick = function lvl3() {
            const guess = input3.value.toLowerCase();
            input3.value = '';
            submitlvl3.disabled = true;
        
            if (tryWords < wordLvl3.length) {
                if (guess === wordLvl3[tryWords].word1[0]) {
                    l3f1.innerHTML = wordLvl3[tryWords].word1[0];
                } else if (guess === wordLvl3[tryWords].word1[1]) {
                    l3f2.innerHTML = wordLvl3[tryWords].word1[1];
                } else if (guess === wordLvl3[tryWords].word1[2]) {
                    l3f3.innerHTML = wordLvl3[tryWords].word1[2];
                } else if (guess === wordLvl3[tryWords].word1[3]) {
                    l3f4.innerHTML = wordLvl3[tryWords].word1[3];
                } else if (guess === wordLvl3[tryWords].word1[4]) {
                    l3f5.innerHTML = wordLvl3[tryWords].word1[4];
                }else if (guess === '') {
                    alert('Enter the letter first');
                } else if (guess === wordLvl3[tryWords].wordd) {
                    input3.style.display = 'none';
                    wordslvl3.style.display = 'none';
                    submitlvl3.style.display = 'none';
                    order3.style.display = 'none';
                    intro.style.display = 'none';
                    typing.style.display='none'
                    hintlvl3.style.display='none';
                    box.style.display = 'none';
                    button.style.display = 'none';
                    resultlvl3.style.display = 'block'; 
                } else {
                    if (incorrect >= array.length) {
                        input3.style.display = 'none';
                        wordslvl3.style.display = 'none';
                        submitlvl3.style.display = 'none';
                        order3.style.display = 'none';
                        intro.style.display = 'none';
                        box.style.display = 'none';
                        button.style.display = 'none';
                        typing.style.display='none'
                        hintlvl3.style.display='none';
                        failure.style.display = 'block'; // Show failure message for level 1
                        submitlvl3.disabled = true;
                    } else {
                        array[incorrect].style.display = 'block';
                        incorrect++;
                    }
                }
            }
            submitlvl3.disabled=false;
        }
        hintlvl3.onclick= function (){
        
            const give=wordLvl3[tryWords].hint;
            alert(give)
        }
        function clear(){
            face.style.display='none'
            lefthand.style.display='none'
            righthand.style.display='none'
            leftleg.style.display='none'
            rightleg.style.display='none'
            wire1.style.display='none'
            wire11.style.display='none'
            wirelong.style.display='none'
            tire1.style.display='none'
            tire2.style.display='none'
            base.style.display='none'
        }
    agreee.onclick = function(){
        pointlvl2 += 10;
    
        if (pointlvl2 >= 50) {
            
            success.style.display = 'block'; // Show success message
            result.style.display = 'none'; // Hide other messages
            input.style.display = 'none'; // Hide input
            submit.disabled = true;
            incorrect = 0;
            tryWords = 0;
            pointlvl1=0;
            pointlvl2=0;
            pointlvl3=0;
        }
        order.style.display = 'block';
        intro.style.display = 'none';
        box.style.display = 'block';
        button.style.display = 'none';
        typing.style.display = 'block';
        typing.innerHTML = 'PLAYER NOW THE GAME IS ON';
        input.style.display='block'
        word.style.display='block'
        submit.style.display='block'
        warning.style.display='none'
        result.style.display='none'
        hint.style.display='block'
        f1.innerHTML='__';
        f2.innerHTML='__';
        f3.innerHTML='__';
        f4.innerHTML='__';
        clear();
    incorrect=0;
        tryWords++;
    lvl2();
    hint.onclick= function (){
        
        const give=words[tryWords].hint;
        alert(give)
    }
    
    
    }
    agreeelvl1.onclick = function() {
        // Increment points by 10
        pointlvl1 += 10;
    
        if (pointlvl1 >= 50) {
            
            success.style.display = 'block'; // Show success message
            resultlvl1.style.display = 'none'; // Hide other messages
            input.style.display = 'none'; // Hide input
            submitlvl1.disabled = true;
            incorrect = 0;
            tryWords = 0;
            pointlvl1=0;
            pointlvl2=0;
            pointlvl3=0;
        } else {
            // Proceed to the next part of Level 1
            resultlvl1.style.display = 'none';
            warning1.style.display = 'none';
            order1.style.display = 'block';
            intro.style.display = 'none';
            box.style.display = 'block';
            button.style.display = 'none';
            typing.style.display = 'block';
            typing.innerHTML = 'PLAYER NOW YOU ARE LEVEL 1';
            input1.style.display = 'block';
            wordslvl1.style.display = 'block';
            submitlvl1.style.display = 'block';
            level1.style.display = 'block';
            hintlvl1.style.display = 'block';
            l1f1.innerHTML = '__';
            l1f2.innerHTML = '__';
            l1f3.innerHTML = '__';
            l1f4.innerHTML = '__';
            clear();
            incorrect = 0;
            tryWords++;
            lvl1();
        }
    };
    agreeelvl3.onclick = function(){
        pointlvl3 += 10;
    
        if (pointlvl3 >= 50) {
            
            success.style.display = 'block'; // Show success message
            resultlvl3.style.display = 'none'; // Hide other messages
            input.style.display = 'none'; // Hide input
            submitlvl3.disabled = true;
            incorrect = 0;
            tryWords = 0;
            pointlvl1=0;
            pointlvl2=0;
            pointlvl3=0;
        }else
{    resultlvl3.style.display='none'
    warning3.style.display='none'
    order3.style.display = 'block';
    intro.style.display = 'none';
    box.style.display = 'block';
    button.style.display = 'none';
    typing.style.display = 'block';
    typing.innerHTML = 'PLAYER NOW YOU ARE LEVEL 1';
    input3.style.display='block'
    wordslvl3.style.display='block'
    submitlvl3.style.display='block'
    level3.style.display='block'
    hintlvl3.style.display='block';
        l3f1.innerHTML='__';
        l3f2.innerHTML='__';
        l3f3.innerHTML='__';
        l3f4.innerHTML='__';
        l3f5.innerHTML='__';
        clear();
    incorrect=0;
        tryWords++;
    lvl3();
    }
}
    fail.onclick = function() {
        
        failure.style.display = 'none';
        intro.style.display = 'block';
        typing.style.display = 'block';
        button.style.display = 'block';
        incorrect = 0;
        tryWords = 0;
        pointlvl1=0;
        pointlvl2=0;
        pointlvl3=0;
        button.disabled = false;
        agree.disabled=false; 
        agreelvl1.disabled=false; 
        agreelvl3.disabled=false; 
        clear();
    };
    back.onclick = function() {
        
        success.style.display = 'none';
        intro.style.display = 'block';
        typing.style.display = 'block';
        button.style.display = 'block';
        incorrect = 0;
        tryWords = 0;
        pointlvl1=0;
        pointlvl2=0;
        pointlvl3=0;
        button.disabled = false;
        agree.disabled=false; 
        agreelvl1.disabled=false; 
        agreelvl3.disabled=false; 
        clear();
    };
    signingin.onclick = function () {
        const signinValue = signinInput.value.trim();

        if (signinValue === '') {
            alert('Please enter your username or email to sign in.');
            return; 
        }else{
            intro.style.display='block'
        signin.style.display='none'
        

    };
    }

    signingup.onclick = function () {
        const signupValue = signupInput.value.trim();

        if (signupValue === '') {
            alert('Please enter your username or email to sign up.');
            return;
        }else{
            intro.style.display='block'
            signup.style.display='none'
            }

        
    };

    registera.onclick= function(){
        signup.style.display='block'
        signin.style.display='none'
    }   
    