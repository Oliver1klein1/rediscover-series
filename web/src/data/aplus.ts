export interface HighlightBlock {
  title: string;
  body: string;
  quote?: string;
  imagePath?: string;
  imageConcept?: string;
}

export interface BigQuote {
  text: string;
  source: string;
}

export interface APlusContent {
  hookHeadline: string;
  elevatorPitch: string;
  whoItIsFor: string;
  keyBenefits: string[];
  highlightBlocks: HighlightBlock[];
  bigQuotes: BigQuote[];
}

export const aplusContent: Record<string, APlusContent> = {
  "liberating-humanity": {
    hookHeadline: "What if the God of Moses wasn't Jesus' Father?",
    elevatorPitch: "Jesus asked a simple question: Would a loving father give snakes and stones to children begging for bread? He said no. Yet the god of Moses sent venomous serpents, killed firstborn sons, and ordered genocide. This book exposes the seismic fracture between Yahweh and the Father Jesus revealed—and how Paul's control replaced Jesus' freedom.",
    whoItIsFor: "Christians who struggle with much of what is heard in church that just doesn't sit right, but they can't quite put their finger on why. It's for anyone seeking to get to the bottom of what Jesus really taught.",
    keyBenefits: [
      "Develop a soft heart free from guilt, radiating fearless love—healing from years of harsh teachings",
      "Break free from the false image of God that has held you hostage—dismantle mental strongholds built on fear",
      "Experience liberation from transactional forgiveness—discover you were never separated, never unloved, never needed to earn what was already yours",
      "Stop needing middlemen, blood rituals, or confession booths—access the Father directly through Jesus' teachings",
      "Transform from fear-based religion to abundant, radiant, fearless life—the death of systems that controlled you",
      "Heal your hardened conscience—restore your ability to see Jesus' teachings and humanity in a light that heals and empowers",
      "Discover you were born worthy—no need to prove yourself or earn love through religious performance",
      "Break free from the economy of guilt and penance—experience the Father who loves without conditions, no wrath, no worship of evil"
    ],
    highlightBlocks: [
      {
        title: "The Snake and Stone Test",
        body: "Jesus made it simple: A loving father doesn't mock his child's hunger. Yet when the Israelites begged for food, Yahweh sent venomous serpents that killed many. When they asked for water, Yahweh gave them a stone to strike. Jesus' rhetorical question wasn't abstract—it was a direct condemnation of Yahweh's actions.",
        quote: "Which of you, if his son asks for bread, will give him a stone? Or if he asks for a fish, will give him a serpent?",
        imagePath: "/assets/aplus/bread_vs_snakes.jpg"
      },
      {
        title: "Darkness vs. Light",
        body: "Yahweh consistently appears shrouded in thick darkness, clouds, and gloom. Moses met Yahweh in darkness on Sinai. But Jesus' Father dwells in unapproachable light—in Him there is no darkness at all. This isn't poetic language; it's a direct contradiction that reveals two fundamentally different beings.",
        quote: "Moses drew near unto the thick darkness where [Yahweh] was.",
        imagePath: "/assets/aplus/darkness_vs_light2.jpg"
      },
      {
        title: "Oaths: From Commanded to Condemned",
        body: "Yahweh commanded His people to take oaths in His name as a religious duty. But Jesus declared all oath-taking forbidden, calling it 'evil' and 'from the evil one.' This wasn't a minor clarification—Jesus was openly rebelling against Yahweh's core commands.",
        quote: "Let your 'Yes' be yes and your 'No,' no. For whatever is more than these comes from the evil one.",
        imagePath: "/assets/aplus/oath_taking.jpg"
      }
    ],
    bigQuotes: [
      {
        text: "There is no sugar-coating this: Jesus is openly condemning the very behavior Yahweh displayed. This on its own is clear and damning proof that Yahweh cannot be the Father of Jesus.",
        source: "Chapter 1 – Jesus' Simple Questions Reveal A Startling Identity"
      },
      {
        text: "The outcome? A soft heart free from guilt, radiating fearless love. Non-selective love. A heart that sees Jesus' teachings—and humanity—in a light that heals and empowers.",
        source: "Introduction – READ THIS FIRST!"
      },
      {
        text: "It's not about tearing down faith. It's about clearing rubble to find what's real: A FATHER WHO LOVES WITHOUT CONDITIONS. No wrath. No worship of evil in the name of justice.",
        source: "Introduction – READ THIS FIRST!"
      }
    ]
  },
  "escape-the-hell-myth": {
    hookHeadline: "If eternal torment is true, then the gospel isn't good news... it's COSMIC BLACKMAIL.",
    elevatorPitch: "What if hell was never a place of eternal fire, but a mistranslation born from fear? This book reveals how 'hell' was invented through deliberate mistranslations of Sheol (grave), Gehenna (a real valley), and Hades (Greek mythology). Jesus spoke of fire that purifies, not tortures. He said 'The Father judges no one'—yet religion rebuilt the very fear system He came to dismantle. The real hellfire was the terror inside believers, not flames beneath the earth.",
    whoItIsFor: "Anyone who's been terrified by hellfire sermons, those questioning eternal conscious torment, Christians carrying invisible wounds from fear-based theology, and seekers ready to discover Jesus' message of love that refuses to fail.",
    keyBenefits: [
      "Experience tremendous psychological healing—freedom from distressing dreams and guilt",
      "Discover how 'hell' was mistranslated from three different words with distinct meanings",
      "Learn why Jesus said 'The Father judges no one'—and what that means for eternal torment",
      "Understand how Gehenna was a real valley outside Jerusalem, not an afterlife destination",
      "See how Jesus' fire purifies rather than tortures—the blaze of truth that consumes lies",
      "Find authentic relationships without the pressure to convert everyone you meet",
      "Stop negotiating with God and start trusting—stop groveling and start resting"
    ],
    highlightBlocks: [
      {
        title: "The Living Room Revelation",
        body: "In a simple living room discussion, a question exposed the absurdity of hell doctrine: 'Are there any babies in hell?' The uncomfortable truth? If eternal torment is real, then killing babies before they can sin would be merciful—robbing Satan of souls. This isn't logic; it's the collapse of fear-based theology under its own weight.",
        quote: "If what traditional Christianity teaches about hell is true, that woman should be rewarded for robbing Satan of three souls. In fact, if we truly believed what we say we do, we'd march into neonatal wards with semiautomatic weapons and send every baby to heaven before they could sin.",
        imagePath: "/assets/aplus/fireplace_chat.jpg"
      },
      {
        title: "Jesus vs. the Punishing God",
        body: "There are two voices echoing through Scripture. One thunders, 'Slay every man, woman, and child.' The other whispers, 'Father, forgive them. They don't know what they're doing.' Jesus said 'The Father judges no one'—NO ONE. Every Old Testament judgment, every massacre claimed in God's name. Jesus was pulling the curtain back on the human projection behind it.",
        quote: "The Father judges no one.",
        imagePath: "/assets/aplus/light_vs_darkness.jpg"
      },
      {
        title: "The Fire That Purifies",
        body: "When Jesus spoke of fire, it was always cleansing—the fire that purifies gold, the baptism of fire that transforms hearts, the light that exposes darkness. He warned of Gehenna—a real waste dump outside Jerusalem where fires smoldered. He was talking about spiritual rot consuming the nation, not eternal punishment. The only fire Jesus ever promised: the fire of reality.",
        quote: "I came to bring fire on the earth, and how I wish it were already kindled!",
        imagePath: "/assets/aplus/purifying_fire.jpg"
      }
    ],
    bigQuotes: [
      {
        text: "If eternal conscious torment is true, then the gospel isn't good news—it's COSMIC BLACKMAIL. But Jesus never preached blackmail. He preached love that refuses to fail.",
        source: "Introduction – Hell Hath No Fury?"
      },
      {
        text: "The real hellfire wasn't beneath the earth. It was the fear inside believers: the inherited terror that made them doubt love itself. For centuries, that inner fire has done far more damage than any literal flame could.",
        source: "Chapter 1 – The Invention of Eternal Fire"
      },
      {
        text: "You stop negotiating and start trusting. You stop groveling and start resting. You stop trying to deserve love and start daring to believe it has been chasing you all along. That is the moment the cage opens. That is the sound of hell collapsing.",
        source: "Conclusion – Love Wins. Always."
      },
      {
        text: "If you've seen Me, you've seen the Father. That sentence rewrote theology forever. If anything in Scripture contradicts the compassion of Jesus, it doesn't reveal God: it reveals our misunderstanding of Him.",
        source: "Chapter 2 – Jesus vs. the Punishing God"
      }
    ]
  },
  "bible-contradictions": {
    hookHeadline: "Every contradiction is a gift in disguise: an opportunity to find truth.",
    elevatorPitch: "Like a jigsaw puzzle with misplaced pieces, Bible contradictions reveal where we've misunderstood the picture. This book presents over 100 illustrated contradictions—from King Jehoiachin's age to Jesus' conflicting genealogies—and reveals the keys that unlock over 90% of them. The goal isn't to destroy faith, but to rebuild it on truth.",
    whoItIsFor: "Truth-seekers who've noticed Bible inconsistencies, those questioning biblical inerrancy, and anyone ready to approach Scripture with humility like the Bereans.",
    keyBenefits: [
      "See over 100 illustrated contradictions with clear explanations",
      "Discover 12 keys that resolve over 90% of contradictions",
      "Learn to approach Scripture with humility and curiosity",
      "Understand how textual errors reveal deeper truths",
      "Find freedom from rigid inerrancy that crushes faith",
      "Experience the excitement of discovering truth through contradictions"
    ],
    highlightBlocks: [
      {
        title: "The Ascension Timeline Mystery",
        body: "When exactly did Jesus ascend to heaven? Luke 24:51 says it happened on the same day as the resurrection, while Acts 1:3—also written by Luke—says Jesus appeared to the disciples over forty days before ascending. The same author, two completely different timelines. This contradiction matters because it touches on how the resurrection appearances were experienced—were they fleeting and dramatic, or drawn-out and instructional? It suggests that theology, not chronology, shaped the story's telling.",
        quote: "If the timeline shifts depending on the message being conveyed, it suggests that theology—not chronology—shaped the story's telling.",
        imagePath: "/books/bible-contradictions/c034-ascension-when.jpg"
      },
      {
        title: "Does God Lie?",
        body: "Multiple verses emphatically state that God cannot lie—Numbers 23:19, 1 Samuel 15:29, Titus 1:2, and Hebrews 6:18 all affirm God is truthful and incapable of deception. But then we read that God sends a lying spirit into the mouths of prophets to deceive a king (1 Kings 22:23), and Ezekiel 14:9 says if a prophet is deceived, it's because God Himself has deceived him. Apologists say God permits deception as judgment, but that still means God initiates falsehood. The Bible says both.",
        quote: "Is God always honest—or is He sometimes strategic in using deception? The Bible says both.",
        imagePath: "/books/bible-contradictions/c043-does-god-lie.jpg"
      },
      {
        title: "When Was God's Name First Revealed?",
        body: "According to Exodus 6:3, God tells Moses, 'I appeared to Abraham, Isaac, and Jacob… but by my name YHWH I was not known to them.' This seems clear: the first reveal. But flip back to Genesis, and the name YHWH appears dozens of times throughout the patriarchal narratives. Genesis 4:26 says people were already calling on 'the name of the LORD.' Did the name suddenly vanish from memory before Moses? This contradiction questions the internal consistency of God's self-disclosure—a major theme in the Bible.",
        quote: "If even God's name rollout is fuzzy, what else might be layered, rewritten, or theologically repackaged?",
        imagePath: "/books/bible-contradictions/c051-yhwh-name-reveal.jpg"
      }
    ],
    bigQuotes: [
      {
        text: "Don't hold on too tightly to what you may have heard about 'Biblical Inerrancy.' Even a child who flips through these pages can see there are clear errors and inconsistencies. You're going to need to be humble and let the truth take you where it will.",
        source: "Introduction"
      },
      {
        text: "That's how you should view these: Opportunities to get at TRUTH. You find yourself getting excited when somebody says 'Here's another mismatch'—that's how contradictions become gifts.",
        source: "Introduction"
      },
      {
        text: "Here's the amazing part: I believe there are at least a dozen keys which resolve or clarify over 90% of the contradictions.",
        source: "Introduction"
      }
    ]
  },
  "reality-unveiled": {
    hookHeadline: "What if reality itself is more profound than we've been told?",
    elevatorPitch: "Beyond the contradictions and deceptions lies a deeper truth about how reality actually works. This book explores the profound implications of Jesus' teachings when we strip away the layers of religious distortion. Discover how consciousness, manifestation, and the true nature of the Father's love intersect in ways that transform everything.",
    whoItIsFor: "Deep seekers who use Jesus' words and teachings as the doorway to truth. Seekers desperate to explore consciousness and positively affect their reality... those who've read the other books and want to go deeper... to get closer to the nature of existence itself.",
    keyBenefits: [
      "Break free from the false identity that you're broken, flawed, and separate from the divine—discover who you really are",
      "Access creative powers beyond ordinary human capacity: healing, transforming, and manifesting through focused consciousness",
      "Liberate yourself from religious determinism and materialist fatalism—become an active co-creator, not a passive victim",
      "Recognize your multidimensional nature: consciousness that transcends your physical body and continues beyond death",
      "Access wisdom beyond personal experience through intuition, inspiration, and direct knowing from your higher consciousness",
      "Master the 6-Step Prayer Manual: transform from begging God for miracles to becoming the miracle yourself",
      "Understand that you're creating your reality every moment—learn to do it consciously rather than unconsciously",
      "Experience liberation from the illusion of separation—recognize your oneness with the Father and all that is"
    ],
    highlightBlocks: [
      {
        title: "You Are Gods",
        body: "Jesus declared 'You are gods'—not metaphorically, not potentially, not in some future state after death. Now. Here. In this reality. This wasn't a slip of the tongue. Jesus was deliberately revealing a profound truth about human nature: that you are an intrinsic, creative, reality-shaping force in a conscious, responsive universe. This liberates you from being a cosmic accident or a wretched sinner—it reveals who you are RIGHT NOW.",
        quote: "You are gods.",
        imagePath: "/assets/aplus/reality_unveiled1.jpg"
      },
      {
        title: "The Kingdom Within",
        body: "Jesus said 'The Kingdom of God is within you'—not a distant afterlife or future paradise, but a present reality. Consciousness itself is the primary foundation of existence, not a secondary effect. When you understand that mind comes first and matter second, everything shifts. You're not a biological machine that sometimes glimpses spirit—you're boundless awareness wearing a temporary suit of flesh.",
        quote: "The Kingdom of God is within you.",
        imagePath: "/assets/aplus/doorway_key.jpg"
      },
      {
        title: "Manifesting Miracles",
        body: "This book doesn't stop at theory. Chapter 9 contains a complete, step-by-step guide to 'Manifesting Miracles'—a practical manual that takes Jesus' most revolutionary teachings and transforms them into a working system for conscious reality creation. You'll learn the 6-Step Prayer Manual that moves you from begging God for miracles to becoming the miracle yourself.",
        quote: "Knowing you're a god is one thing. Acting like one... that's where the magic happens.",
        imagePath: "/assets/aplus/stillness_meditation.jpg"
      }
    ],
    bigQuotes: [
      {
        text: "When Jesus performed what we call 'miracles,' he wasn't some cosmic rule-breaker violating natural law. Nope... he was operating at a higher level of it. Think of it like this: while everyone else was playing checkers, Jesus was playing 3D chess at the quantum level where consciousness directly shapes matter.",
        source: "Chapter 2 – Quantum Reality"
      },
      {
        text: "Your consciousness isn't some lonely prisoner trapped inside your skull, passively recording whatever 'reality' happens to show up. It's a cosmic force that extends into and shapes the quantum field itself, literally manifesting the experiences that become your life. You're not just observing reality... you're creating it!",
        source: "Chapter 3 – The Observer Effect"
      },
      {
        text: "Understanding is incomplete until it becomes embodiment. Revelation finds its fullness in PRACTISE when truth is not only known, but lived. You were never meant to strive for blessings. You were created to reveal them.",
        source: "Chapter 9 – Manifesting Miracles"
      }
    ]
  },
  "framing-jesus": {
    hookHeadline: "What if Jesus, while asserting his (and our) divinity, never claimed to be God?",
    elevatorPitch: "Jesus said 'The Father is greater than I' and 'Why do you call Me good? No one is good except God alone.' Yet for 1700 years, the church has taught Jesus is God. This book investigates the textual evidence—including a verse that vanished from Luke's Gospel—revealing how Jesus' true identity was systematically erased and replaced with a doctrine He never taught.",
    whoItIsFor: "Those desperate to get at truth... desperate enough to follow Jesus' words (his authentic words, not words put into his mouth) to wherever these may lead. Those prepared to say that nothing is off-limits, including the Trinity doctrine, if it contradicts Jesus. Those ready to see Jesus as He actually presented Himself: pointing to the Father, not claiming equality.",
    keyBenefits: [
      "Discover Jesus' own words distinguishing Himself from God, while asserting his, and our, divinity",
      "Learn about the missing verse from Luke that changes everything",
      "Understand how early church fathers altered the text",
      "See how the Trinity doctrine developed centuries after Jesus",
      "Find freedom from theological confusion",
      "Realize that everything Jesus did, we can do... just as he had said... because we are connected to the Father, exactly as he was"
    ],
    highlightBlocks: [
      {
        title: "The Erased Fingerprint",
        body: "In 1903, scholar Allan Hoben found Irenaeus quoting Luke: 'The Father is the Creator of all.' But this verse has vanished from every modern translation. Like a deleted tweet, it left behind only the ghost of testimony—evidence that someone took an eraser to sacred text.",
        quote: "Seven English words. Eight Greek words. ONE MASSIVE PROBLEM.",
        imagePath: "/assets/aplus/father_creator.jpg"
      },
      {
        title: "Jesus' Own Words",
        body: "Jesus repeatedly distinguished Himself from the Father: 'The Father is greater than I,' 'Why do you call Me good? No one is good except God alone,' and 'You are the only true God.' These aren't minor statements—they're the foundation of how Jesus presented Himself.",
        quote: "Father… You are the only true God.",
        imagePath: "/assets/aplus/jesus_words.jpg"
      },
      {
        title: "The Trinity Shift",
        body: "For the first three centuries, Christians understood Jesus as pointing to the Father. Then, at Nicaea in 325 AD, everything changed. The church declared Jesus to be 'of the same substance' as the Father—a doctrine Jesus never taught and would have rejected.",
        quote: "The pattern is there, hiding in plain sight like a watermark that only appears when you tilt the page against the light.",
        imagePath: "/assets/aplus/trinity.jpg"
      }
    ],
    bigQuotes: [
      {
        text: "Those three verses above? They're Jesus' own words, yet they read like forbidden text in today's Christian landscape. Strip away two thousand years of theological white noise—what emerges is unsettling.",
        source: "Introduction – Erased Fingerprints"
      },
      {
        text: "This wasn't just a missing puzzle piece. This was discovering that the puzzle you've been working on for years has been modified—pieces removed, edges smoothed, the picture subtly altered while you weren't looking.",
        source: "Introduction – Erased Fingerprints"
      },
      {
        text: "BRACE YOURSELF. Because what I discovered will challenge everything you thought you knew about the most famous man who ever lived.",
        source: "Introduction – Erased Fingerprints"
      }
    ]
  }
};

