
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

    const urlName = senderName.value.replace(' ', '%20');
    const urlBody = senderMsg.value.replace(' ', '%20') + '%0BContact%20at%20' + senderEmail.value;
    const mailtoURL = 'mailto:bryce@vectorpixel.net?subject=Portfolio%20Contact%20Form%20From%20' + urlName + '&body=' +urlBody;

    window.open(mailtoURL);

    senderName.value = '';
    senderEmail.value = '';
    senderMsg.value = '';
    
    /*
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
    */
    
      
      
}