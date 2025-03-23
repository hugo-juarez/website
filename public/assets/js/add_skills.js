const skillContainer = document.getElementById('skill-container');

const skills = [
    {name: 'C/C++', icon:'assets/images/c.svg'},
    {name: 'Pyhon', icon:'assets/images/py.svg'},
    {name: 'JS', icon:'assets/images/js.svg'},
    {name: 'Dart', icon:'assets/images/dart.svg'},
    {name: 'Linux', icon:'assets/images/linux.svg'},
    {name: 'Docker', icon:'assets/images/docker.svg'},
    {name: 'Arduino', icon:'assets/images/arduino.svg'},
    {name: 'STM32', icon:'assets/images/stm32.svg'},
    {name: 'Raspberry', icon:'assets/images/rasp.svg'},
    {name: 'ESP32', icon:'assets/images/esp.svg'},
    {name: 'OpenCV', icon:'assets/images/open.svg'},
    {name: 'MQTT', icon:'assets/images/mqtt.svg'},
    {name: 'AWS', icon:'assets/images/aws.svg'},
    {name: 'SQL', icon:'assets/images/sql.svg'},
    {name: 'Flutter', icon:'assets/images/flutter.svg'},
    {name: 'Github', icon:'assets/images/git.svg'},
    {name: 'PCB', icon:'assets/images/circuit.svg'},
    {name: 'DSA', icon:'assets/images/dsa.svg'},
];

const fragment = document.createDocumentFragment();

skills.forEach((skill) => {
    if(!/^[a-zA-Z0-9 -/+]+$/.test(skill.name)){
        console.warn("Invalid skill name detected: ", skill.name);
        return;
    }

    const skillHolder = document.createElement("div");
    skillHolder.classList.add('skill');

    const iconHolder = document.createElement("img");
    iconHolder.src = skill.icon;

    const textHolder = document.createElement('p');
    textHolder.textContent = skill.name;

    skillHolder.appendChild(iconHolder);
    skillHolder.appendChild(textHolder);
    fragment.appendChild(skillHolder);
});

skillContainer.appendChild(fragment);