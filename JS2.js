player_1_name = localStorage.getItem("player-1");
player_2_name = localStorage.getItem("player-2");

player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_name").innerHTML = player_1_name + ": ";
document.getElementById("player_2_name").innerHTML = player_2_name +": ";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "question turn - " + player_1_name;
document.getElementById("player_ans").innerHTML = "answer turn - " + player_2_name;
function send() {
    no = document.getElementById("word").value;
    no2 = document.getElementById("word2").value;
    actual_answer = parseInt(no) * parseInt(no2);
    
    q_no = "<h4 id= 'word_display'>Q."+ no +"X" + no2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = q_no + input_box + check_button ;
      document.getElementById("output").innerHTML = row;
     document.getElementById("no").value = ""; 
     document.getElementById("no2").value = "";
    }
    ques_turn = "player-1";
ans_turn = "player-2";
    function check() {
        get_answer = document.getElementById("input_check_box").value;
        if (get_answer==actual_answer) {
            if (ans_turn=="player-1") {
                player_1_score= player_1_score + 1;
                document.getElementById("player_1_score").innerHTML = player_1_score;
            }
            else{
                player_2_score= player_2_score + 1;
                document.getElementById("player_2_score").innerHTML = player_2_score;
            }
        } 
        if (ques_turn=="player-1") {
            ques_turn = "player-2";
            document.getElementById("player_question").innerHTML = "question turn - " + player_2_name;
        }
        else{
            ques_turn = "player-1";
            document.getElementById("player_question").innerHTML = "question turn - " + player_1_name;
        }
    
     if (ans_turn=="player-1") {
            ans_turn = "player-2";
            document.getElementById("player_ans").innerHTML = "answer turn - " + player_2_name;
        }
        else{
            ans_turn = "player-1";
            document.getElementById("player_ans").innerHTML = "ans turn - " + player_1_name;
        }
        document.getElementById("word").innerHTML = "";
        document.getElementById("word2").innerHTML = "";
    }
    
    