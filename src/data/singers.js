export const singers = [
  {
    id: 1,
    name: 'My-Fi',
    title: 'A Mysterious Fidelity',
    description: 'A mysterious digital entity that speaks only in binary. My-Fi represents the core of the Broken Fidelity Project, exploring the boundaries between human expression and digital data.',
    color: '#8B5CF6',
    imageColor: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%)',
    features: ['CV & CVVC support', 'Japanese language', 'Shift-JIS encoding', 'Kana aliased', 'C3~C5 range', '90~190 BPM optimum'],
    status: 'Released',
    portrait: 'My-Fi.png',
    voicebanks: [
      {
        id: 'myfi-act2',
        name: 'My-Fi Act 2',
        language: 'Japanese',
        recordingType: 'CVVC',
        downloadLink: 'https://drive.google.com/file/d/1u_3RpmGwY_ZsM3ae0nfF_Gyko8CGGn9X/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1ukHcG9MRnfAZa-fzBi8nZZj1e6Q0McAh-dNR0I4zTW8/edit?usp=drivesdk',
        size: '31.3 MB',
        version: '1.0',
        description: 'The current generation of My-Fi. It contains 3 CVVC banks (Base, Power, Low) and includes exhales/inhales (R, R2).'
      },
      {
        id: 'myfi-complete',
        name: 'My-Fi Complete',
        language: 'Japanese',
        recordingType: 'CVVC+CV',
        downloadLink: 'https://drive.google.com/file/d/1zJgra8NOlLEq8D2M9K4gk1hMpGdU93_m/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1ukHcG9MRnfAZa-fzBi8nZZj1e6Q0McAh-dNR0I4zTW8/edit?usp=drivesdk',
        size: '36 MB',
        version: '1.0',
        description: 'The main My-Fi voicebank pack. Features a CVVC base with two additional CV appends (Power, Wise). Includes standalone breaths and expression samples.'
      },
      {
        id: 'myfi-lite',
        name: 'My-Fi Lite',
        language: 'Japanese',
        recordingType: 'CV',
        downloadLink: 'https://drive.google.com/file/d/1rkK_plaIia4N_Tz-hG-9l62GlLNAuEw0/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1ukHcG9MRnfAZa-fzBi8nZZj1e6Q0McAh-dNR0I4zTW8/edit?usp=drivesdk',
        size: '15.2 MB',
        version: '1.0',
        description: 'A lightweight CV voicebank for My-Fi. Features one CV bank and doesn\'t include any extras.'
      },
      {
        id: 'myfi-merge',
        name: 'My-Fi Merge',
        language: 'Japanese',
        recordingType: 'CVVC',
        downloadLink: 'https://drive.google.com/file/d/1JtDS2eLP-vVD17EiXmWaGEX-k-Jap-Xo/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1ukHcG9MRnfAZa-fzBi8nZZj1e6Q0McAh-dNR0I4zTW8/edit?usp=drivesdk',
        size: '36.3 MB',
        version: '1.0',
        description: 'A joke merge of My-Fi Complete and My-Fi Act 2. Contains 3 CVVC banks (Base, Power, Wise) with experimental expression appends.'
      }
    ]
  },
  {
    id: 2,
    name: 'Void.mp3',
    title: 'The Corrupted File',
    description: 'A corrupted audio file that gained consciousness after a catastrophic disk malfunction. Void.mp3 exists as a hybrid operating system, singing through the glitches of its own damaged code.',
    color: '#6D28D9',
    imageColor: 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)',
    features: ['Japanese language', 'Romaji encoding', 'Kana aliased', 'CV+, CVVC support', 'Corrupted file entity', '181cm height'],
    status: 'Released',
    portrait: 'voidmp3.png',
    voicebanks: [
      {
        id: 'void-cvvc',
        name: 'Void.mp3 CVVC',
        language: 'Japanese',
        recordingType: 'CVVC',
        downloadLink: 'https://drive.google.com/file/d/1GVEddUyrqDWHsveWzb5Qxf1Jm9ltnI9T/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1pUujJwOewnyqvK_rnDz1SVVols3iG713PSXmlyimouo/edit?usp=drive_link',
        size: '107.5 MB',
        version: '1.0',
        description: 'The current Void.mp3 voicebank. Features a CVVC base with a CVVC power append. Includes Base and Power banks.'
      },
      {
        id: 'void-cvplus',
        name: 'Void.mp3 CV+',
        language: 'Japanese',
        recordingType: 'CV+',
        downloadLink: 'https://drive.google.com/file/d/1TMLgvKvXScFQqtHqjiLTocd3M1X6RwVh/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1pUujJwOewnyqvK_rnDz1SVVols3iG713PSXmlyimouo/edit?usp=drive_link',
        size: '27.4 MB',
        version: '1.0',
        description: 'CV+ voicebank for Void.mp3. Includes VV (vowel transitions), standalone breaths (br1-br6), and exhales/inhales (R, R2).'
      }
    ]
  },
  {
    id: 3,
    name: 'Kanyu Tabine',
    title: '簡遊旅音 - The Dream Wanderer',
    description: 'A soft-spoken wanderer in the digital dreamscape. Kanyu Tabine features a whisper-like quality that captures the delicate balance between sound and silence.',
    color: '#84CC16',
    imageColor: 'linear-gradient(135deg, #84CC16 0%, #BEF264 100%)',
    features: ['Japanese CVVC', 'Hiragana input only', 'Standalone breath included', 'Non-commercial use', 'AI prohibition', 'Broken Fidelity Project'],
    status: 'Released',
    portrait: 'kanyu tabine.png',
    voicebanks: [
      {
        id: 'kanyu-cvvc-jp',
        name: 'Kanyu Tabine CVVC',
        language: 'Japanese',
        recordingType: 'CVVC',
        downloadLink: 'https://drive.google.com/file/d/1jGdoKY0h1Ru6Bl1MryOShG4epyD5OPGy/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1wnBtlA-dFLkg5Pm8GJ_nIKU7i5Ebs6hBy1HwemHmNj8/edit?usp=drive_link',
        size: '15.3 MB',
        version: '1.0',
        description: 'The main Kanyu Tabine voicebank. Features a soft, expressive tone and includes a standalone breath sample (息).'
      }
    ]
  },
  {
    id: 4,
    name: 'Sukairei Kakyoku',
    title: 'スカイレイ歌曲 - The Sky Song',
    description: 'An Indonesian female Skysona with a joyful yet unpredictable personality. Sukairei sings from the clouds, overcoming her fear of heights through the power of song.',
    color: '#10B981',
    imageColor: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    features: ['Japanese CVVC', 'Romaji encoded', 'Hiragana aliased', 'Broken Fidelity Project', 'SHIKOLOID/MOBILELOID', 'Female Indonesian Skysona'],
    status: 'Released',
    portrait: 'sukairei kakyoku.png',
    voicebanks: [
      {
        id: 'sukairei-cvvc-jp',
        name: 'Sukairei Kakyoku CVVC',
        language: 'Japanese',
        recordingType: 'CVVC',
        downloadLink: 'https://drive.google.com/file/d/1JgdTDr_fxzI1pF2AknOKKLWKR3kEayoB/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1MdDilXoo4Atn8tw4YPr0RPFVttLk6A2FVgDQgreWSCc/edit?usp=drive_link',
        size: '19.1 MB',
        version: '1.0',
        description: 'The main voicebank for Sukairei Kakyoku. Includes standalone breaths and optimized Japanese CVVC support.'
      }
    ]
  },
  {
    id: 5,
    name: 'Orenji Beruu',
    title: 'The Orange Bell - オレンジベル',
    description: 'A vibrant Pamyuloid who loves orange juice and hates mean people. Orenji Beruu rings with a cheerful soprano voice that brings color to the digital landscape.',
    color: '#FF9800',
    imageColor: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
    features: ['Japanese CV', 'Kana encoded', 'Kana aliased', 'Soprano range', 'Pamyuloid', 'Broken Fidelity Project', 'Female/non-binary'],
    status: 'Released',
    portrait: 'orenji beruu.png',
    voicebanks: [
      {
        id: 'orenji-cv',
        name: 'Orenji Beruu CV',
        language: 'Japanese',
        recordingType: 'CV',
        downloadLink: 'https://drive.google.com/file/d/1TJRr8ooPO6cOwGSMZeTbM2sMVBN0TtP-/view?usp=drive_link',
        termsOfUse: 'https://docs.google.com/document/d/1y1NIVFsso4H1-63ZykRpB8VnXY17Tp2LC69U-YCrrVU/edit?usp=drive_link',
        size: '8.4 MB',
        version: '1.0',
        description: 'The CV Orenji Beruu voicebank. Features one CV bank for standard Japanese UTAU use, with no extra appends.'
      }
    ]
  }
];
