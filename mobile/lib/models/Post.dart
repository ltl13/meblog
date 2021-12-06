class Post {
  final String image, title, content, author, datePost;
  final int timeReading;

  Post({
    required this.datePost,
    required this.timeReading,
    required this.image,
    required this.title,
    required this.content,
    required this.author,
  });
}

List<Post> posts = [
  Post(
    image: "assets/images/post0.jpg",
    title: "Joey Jordison, Founding Slipknot Drummer, Dead at 46",
    author: "Luan Le",
    datePost: "Dec 1",
    timeReading: 6,
    content: """
        Joey Jordison, Slipknot’s founding drummer and co-writer of many of their biggest hits, died on Monday at the age of 46. A rep for his family said he died “peacefully in his sleep” but did not specify a cause of death.

        “Joey’s death has left us with empty hearts and feelings of indescribable sorrow,” reads a statement from Jordison’s family. “To those that knew Joey, understood his quick wit, his gentle personality, giant heart, and his love for all things family and music. The family of Joey have asked that friends, fans, and media understandably respect our need for privacy and peace at this incredibly difficult time.” The family intends to hold a private funeral service.

        Jordison was the motor that kept Slipknot’s music running in their early days. His stoic presence behind the drum kit and virtuosic drum solos, like the one captured in the band’s Disasterpieces film where his riser ascended to the heavens, made him a favorite member for fans. Behind the scenes, Jordison was instrumental to Slipknot’s songwriting, and his neck-rattling rhythms and death-metal blastbeats were a crucial ingredient to the band’s sudden success.

        The drummer was playing with a group of Des Moines, Iowa metalheads who called themselves the Pale Ones and later Meld when he suggested they change their name to Slipknot in 1995. Within a few years, the band’s lineup expanded to nine members who wore nightmarish masks and fused metal and rap aggression that placed them at the vanguard of the nu-metal explosion. Thanks to steady touring and explosive live shows on Ozzfest, their 1999 self-titled debut went double-platinum.

        He stayed with the band until 2013, leaving for what he described at the time as “personal reasons.” A few years later, he revealed a neurological disease that caused his departure. “I got really, really sick with a horrible disease called transverse myelitis; I lost my legs,” he told the audience at the Metal Hammer Golden Gods Awards in 2016 (via NME). “I couldn’t play anymore. It was a form of multiple sclerosis, which I wouldn’t wish on my worst enemy. I got myself back up, and I got myself in the gym and I got myself back in fucking therapy to fucking beat this shit.” At the time, he said he was rededicating himself to music with a new band called Vimic.

        In addition to Slipknot and Vimic, the prolific musician played guitar in the glam-inspired horror-punk group the Murderdolls, drums with the alt-metal group Scar the Martyr and extreme-metal supergroup Sinsaenum, and pre-Slipknot resume stints in Modifidious and the Have Nots. He also made guest appearances on recordings by Otep, Necrophagia, and Rob Zombie. In 2005, he assembled several supergroups for the project Roadrunner United, which commemorated the 25th anniversary of Slipknot’s label, Roadrunner; on five tracks, he played with dream teams that featured members of Type O Negative, Deicide, Life of Agony, and King Diamond’s band.
        """,
  ),
  Post(
    image: "assets/images/post1.jpeg",
    title: "Metallica Teaches You How to Rock in New Class",
    author: "Luan Le",
    datePost: "Dec 2",
    timeReading: 6,
    content: """
        Metallica imparts their four-plus decades of rock & roll wisdom in their new course via MasterClass, which launched on Thursday. They are the first band to offer a class on the streaming platform. In the course, they teach strategies for growing and staying together as a band, how to collaborate creatively, and develop and maintain a relationship with an audience, among other topics.

        As James Hetfield, Lars Ulrich, Kirk Hammett, and Robert Trujillo discuss in a trailer for the class, the importance of communication is key — not just for being creative musically but with your bandmates — and they touch on how ego and being too critical of each other almost broke them up.

        In two exclusive clips from the course, Hetfield expounds on some of the principles taught in the course. He addresses navigating ego in one. “He wants to say what he wants to say first because he thinks that’s important, that he won’t get heard. I understand that. We’ve all got like that 18-year old in us that’s still wanting to run the show at times,” he explains, referring to communicating with bandmates. “Or I know when he’s sarcastic, he really means a little bit of that. So, I can take that with a grain of salt, but then also get past that and get down to understanding, ‘OK, here’s what he’s really saying.’ So, we all know each other and we continue after 40 years to learn more about each other.”

        In another clip, he talks about the “Fifth Member of the Band,” also known as the audience. “People that show up at the show and they say afterward, ‘You know, yeah the songs were awesome, but man, there was a group of five people down in front of me, they were so into it. They were going nuts, and they were singing every single word’ and all of this,” he says. “They were more infatuated with the crowd than with us, and that to me is the fifth member right there, you know. You’re moving another person with your music and you’re influencing another person that’s watching them. So, it’s so multilayered.”

        Metallica’s course also features the band dissecting some of their biggest hits, including “Enter Sandman” and “Master of Puppets,” taking the students through the songwriting process. The class culminates in an exclusive six-song performance.

        “We have sustained our bond for more than 40 years because we’ve learned a lot about each other and ourselves over time,” Hetfield said in a statement. “In our class, we not only teach MasterClass members how we write songs and find inspiration for our music, but how the experiences we’ve had together have contributed to successful creative collaboration.”
        """,
  ),
  Post(
    image: "assets/images/post2.png",
    title: "Making a Blog with Flutter and Hugo",
    author: "Gordon Hayes",
    datePost: "Nov 30",
    timeReading: 6,
    content: """
        Lets begin with a quick description for Flutter Web and Hugo, and then provide an overview and motivation for using these two technologies together.
        Flutter web is a code-compatible implementation of Flutter that is rendered using standards-based web technologies: HTML,CSS and JavaScript. With Flutter for web, you can compile existing Flutter code written in Dart into a client experience that can be embedded in the browser and deployed to any web server. You can use all the features of Flutter, and you don’t need a browser plug-in.
        Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again. Hugo is written in Go (aka Golang).
        The FunWith website and blog are companions for the Fun with Flutter YouTube channel. So using Flutter Web seemed like an obvious choice as it serves the dual purpose of function and learning (for myself as well as others).
        The use of Hugo came more from need than desire. Flutter Web is still in early stages and as a result I wanted to ensure that the content I produce has a safe place to live; come in Hugo. While at the same time I wanted to expose that content to the Flutter web application and make use of Flutter as much as I could; come in Hugo as an API.
        """,
  ),
  Post(
    image: "assets/images/post3.png",
    title: "A Jolly Season 3 in Dodoland 🎄",
    author: "Zendodo Party",
    datePost: "Dec 4",
    timeReading: 6,
    content: """
        Winter is here and so is Season 3 ⛄️ The moment is here Heroes! Strap on to your sledge and get ready to hear what The ZenMother has in store for you this jolly winter 🚀 With various priority drops and the announcement of one of the rarest accolade to date, this is no time to get frozen in your tracks! 🏂
        This Season, our lovely ZenMother has 6 new Season 3 Base Zendodos for Heroes to obtain! Throughout the Season, Heroes can attain Evolution I — Gus from Drops and the Rally Pool💰! By taking 3 Zendodos of the same evolution, Heroes are then able to evolve it to a bigger, stronger, and tougher Zendodo of much higher power 🚀
        Season 3 will last from December to the end of January before these Zendodos can never be minted again 😮 In these two months, the ZenMother will be busy staying warm in the Zendodo factory whilst fine-tuning the DNA of her Limited Edition Zendodos! There will be 4 new Limited Edition Zendodos to be released over the season 🔥 It’s gonna be an exciting Winter Heroes!
        Throughout the Season, the ZenMother will be dropping Gus at 5 WAX each and Season 3 Silver Packs at 100 WAX each 💰 The drop size and regularity of the drop will be dependent on (1) Demand of NFTs, (2) Speed at which Drop Clears and (3) Prices on the Secondary Market. The value of Heroes’ NFTs are of our utmost priority, ensuring a healthy supply and demand of Zendodos dropped to balance the market ❤️
        """,
  ),
  Post(
    image: "assets/images/post4.jpeg",
    title: "GAN — Why it is so hard to train Generative Adversarial Networks!",
    author: "Jonathan Hui",
    datePost: "Dec 5",
    timeReading: 6,
    content: """
        It is easier to recognize a Monet’s painting than drawing one. Generative models (creating data) are considered much harder comparing with the discriminative models (processing data). Training GAN is also hard. This article is part of the GAN series and we will investigate why the training is so elusive. Through the study, we understand some fundamental problems that drive the directions of many researchers. We will look into some disagreements so we know where the research may head to. Before looking into the problems, let’s have a quick recap on some of the GAN equations.
        GAN samples noise z using normal or uniform distribution and utilizes a deep network generator G to create an image x (x=G(z)).
        In GAN, we add a discriminator to distinguish whether the discriminator input is real or generated. It outputs a value D(x) to estimate the chance that the input is real.
        The diagram below summarizes how we train the discriminator and the generator using the corresponding gradient.
        Real-life data distributions are multimodal. For example, in MNIST, there are 10 major modes from digit ‘0’ to digit ‘9’. The samples below are generated by two different GANs. The top row produces all 10 modes while the second row creates a single mode only (the digit “6”). This problem is called mode collapse when only a few modes of data are generated.
        """,
  ),
];
