function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gno56de0q/model.json', modelReady);

}
function modelReady()
{
    classifier.classify(gotResults);
}
var lion = 0;
var cow = 0;
var pig = 0;
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_red = Math.floor(Math.random() * 255) + 1;
        random_green = Math.floor(Math.random() * 255) + 1;
        random_blue = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - " + (results [0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_red+", "+random_green+", "+random_blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_red+", "+random_green+", "+random_blue+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if(results [0].label == "lion")
        {
            img1.src = 'lion.gif'
            img2.src = 'pig.jpg'
            img3.src = 'cow.jpg'
            img4.src = 'background_noise.jpg'
        }
        else if(results[0].label == "cow")
        {
            img1.src = 'lion.jpg'
            img2.src = 'pig.jpg'
            img3.src = 'cow.gif'
            img4.src = 'background_noise.jpg'
        }
        else if(results[0].label == "pig")
        {
            img1.src = 'lion.jpg'
            img2.src = 'pig.gif'
            img3.src = 'cow.jpg'
            img4.src = 'background_noise.jpg'
        }
        else
        {
            img1.src = 'lion.jpg'
            img2.src = 'pig.jpg'
            img3.src = 'cow.jpg'
            img4.src = 'listening.gif'
        }
    }

}