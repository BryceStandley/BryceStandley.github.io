
async function SendContactMessage(event)
{
    event.preventDefault();

    const senderEmail = document.getElementById("email").value;
    const senderName = document.getElementById("name").value;
    const senderMsg = document.getElementById("message").value;

    const messageJson = {'name':senderName, 'email':senderEmail, 'message':senderMsg};
    const webhookUrl = 'https://api.vectorpixel.net:5050/validate/hooks'

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageJson),
    }).then(res => {
      if (res.status === 200) {
        alert('I have received your message!');
      } else {
        alert('There was an error! Try again later!');
      }
    });

    
      
      
}