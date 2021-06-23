const changeText = () => 
{
    let text = "<strong>Happy Birthday Fenny!</strong>";
    document.querySelector(".content").innerHTML = text;
}

const resolveText = () =>
{
    let text = " Hey, hope you're doing well...I just wanted to wish you a <strong>Happy Birthday!!!</strong> I hope you like this little card. I'm not great with colors so I had to improvise. Also, always remember to keep <strong>smiling</strong> and stay hydrated. <strong>Thank you</strong> for everything especially that <strong>warm fuzzy feeling</strong> we get when you're around...";

    document.querySelector(".content").innerHTML = text;
    console.log("Content restored!");
}

