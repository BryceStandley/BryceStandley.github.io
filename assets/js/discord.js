
async function SendContactMessage(event)
{
    event.preventDefault();

    const senderEmail = document.getElementById("email");
    const senderName = document.getElementById("name");
    const senderMsg = document.getElementById("message");

    if(senderName.value === '' || senderEmail.value === '' || senderMsg.value === '')
    {
      alert('Please enter the required contact information.');
      return;
    }

    const messageJson = {'name':senderName.value, 'email':senderEmail.value, 'message':senderMsg.value};
    const webhookUrl = 'https://api.vectorpixel.net/validate/hooks/'

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageJson),
    }).then(res => {
      if (res.status === 200) {
        senderName.value = '';
        senderEmail.value = '';
        senderMsg.value = '';
        alert('I have received your message!');
      } else {
        alert('There was an error! Try again later!');
      }
    });

    
      
      
}