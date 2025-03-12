if (fileName === "about.html") {
        const aboutSection = document.querySelector('main h2');
        if (aboutSection.innerHTML === "About Me") {
            aboutSection.innerHTML = "Обо мне";
            document.querySelector('main p').innerText = "Меня зовут Салахаддин, мне 16 лет. Мне нравится играть в баскетбол и слушать музыку.";
        } else {
            aboutSection.innerHTML = "About Me";
            document.querySelector('main p').innerText = "My name is Salahaddin, I'm 16 years old. I like playing basketball and listening to music.";
        }
    } else if (fileName === "projects.html") {
        const projectsSection = document.querySelector('main h2');
        if (projectsSection.innerHTML === "Projects") {
            projectsSection.innerHTML = "Проекты";
            document.querySelector('main p').innerText = "Я очень часто учавствую во всяких проектах,в основном групповых потому что я люблю коммуницировать с людьми. Также я учавствую в лигах и баскетбольных турнирах, активно поддерживаю команду на поле и вне его";
        } else {
            projectsSection.innerHTML = "Projects";
            document.querySelector('main p').innerText = "I am participating in a lot of projects often, mainly group ones since i love communication with people. With that i also an active basketball leagues and tournaments player, i support my team on and off court";
        }
    }
});

// Handle form submission
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending the message.');
        });
    });
}
