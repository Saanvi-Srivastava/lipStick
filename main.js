function preload() 
{
    lip_stick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
  
function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}
  
function draw() 
{
        image(video, 0, 0, 300, 300);
        image(lip_stick, lipX, lipY, 50, 20);
}  


function take_snapshot()
{
    save('myFilterImage.png');
}