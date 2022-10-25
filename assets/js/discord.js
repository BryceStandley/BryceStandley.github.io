
async function SendContactMessage(event)
{
    event.preventDefault();

    const senderEmail = document.getElementById("email").value;
    const senderName = document.getElementById("name").value;
    const senderMsg = document.getElementById("message").value;


    const webhookBody = {
        embeds: [{
          title: 'Portfolio Contact Form Submitted',
          fields: [
            { name: 'Sender', value: senderName },
            { name: 'Email', value: senderEmail },
            { name: 'Message', value: senderMsg }
          ]
        }],
      };

      const webhookUrl = 'https://discord.com/api/webhooks/1034392675383779338/xYVhdwqAG0EudeSpA4Y00YpCCp6wjmSyPMiVyEuK3OvDYi3Wle2_gG8qH3ChCAwdWxI5';

    const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
      } else {
        alert('There was an error! Try again later!');
      }
      
      
}