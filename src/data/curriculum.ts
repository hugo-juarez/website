export const experiences = [
  {
    company: 'GE Healthcare',
    date: '2025 - Now',
    title: 'Embedded Software Engineer',
    description:
      'Working on real-time operating system for anesthesic and respiratory system.',
    dotColot: 'bg-purple-500',
  },
  {
    company: 'Procter & Gamble',
    date: '2023 - 2025',
    title: 'Automation Engineer',
    description:
      'Worked on Automated Guided Vehicles (AGV) integration to industrial plant.',
    dotColot: 'bg-blue-400',
  },
  {
    company: 'Voluntary Intelligence Center',
    date: '2023 - 2023',
    title: 'Embedded Software Engineer Co-Op',
    description:
      'Engineered autonomous drone system for disaster response reconnaissance.',
    dotColot: 'bg-red-500',
  },
  {
    company: 'Monterrey Institute of Technology and Higher Education (ITESM)',
    date: '2019 - 2023',
    title: 'B.S. Mechatronic Engineer',
    description: 'Got my degree and graduated top of the class.',
    dotColot: 'bg-yellow-500',
  },
];

export const projects = [
  {
    title: 'Drone',
    description:
      'ESP32-based flight controller for hexacopter/quadcopter drones, with cascading PID control.',
    tech: [
      { name: 'Drone', color: 'cyan' },
      { name: 'C++', color: 'blue' },
      { name: 'PID', color: 'yellow' },
      { name: 'ESP32', color: 'yellow' },
      { name: 'Firmware', color: 'yellow' },
    ],
    link: 'https://github.com/hugo-juarez/ESP32_Drone',
  },
  {
    title: 'AGV Bakery',
    description:
      'Autonomous AGV system for contactless bakery stores using RFID, AWS IoT, YOLOv4 object detection on Raspberry Pi, and facial recognition.',
    tech: [
      { name: 'IoT', color: 'cyan' },
      { name: 'AWS', color: 'yellow' },
      { name: 'MQTT', color: 'yellow' },
      { name: 'Yolov4', color: 'yellow' },
      { name: 'C++', color: 'blue' },
      { name: 'Python', color: 'yellow' },
    ],
    link: 'https://github.com/hugo-juarez/AGVPanaderia',
  },
  {
    title: 'STM32 Library',
    description:
      'Bare-metal driver library for STM32F407xx microcontroller with GPIO, SPI, I2C, UART support and BSP for DS1307 RTC and LCD display ',
    tech: [
      { name: 'Firmware', color: 'cyan' },
      { name: 'STM32', color: 'yellow' },
      { name: 'I2C', color: 'yellow' },
      { name: 'USART', color: 'yellow' },
      { name: 'CAN', color: 'blue' },
      { name: 'RTC', color: 'yellow' },
    ],
    link: 'https://github.com/hugo-juarez/stm32-driver',
  },
];
