import React, { useState, useEffect } from 'react'
import main from './App.module.scss';

// ICONS
import {
    AiOutlineGithub,
    AiOutlineTwitter,
} from 'react-icons/ai';

import {
    FaDiscord,
    FaTwitch,
    FaDonate,
} from 'react-icons/fa';

import { TbPointFilled } from 'react-icons/tb';


const App: React.FC = () => {
    const [command1, setCommand1] = useState<number[]>([]);
    const [command2, setCommand2] = useState<number[]>([]);
    const [commander1, setCommander1] = useState<number>();
    const [commander2, setCommander2] = useState<number>();
    const [dota1, setDota1] = useState<number[]>([]);
    const [dota2, setDota2] = useState<number[]>([]);
    const [input1, setInput1] = useState<string>('');
    const [input2, setInput2] = useState<string>('');
    const [randomNumber, setRandomNumber] = useState<number>();
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const mixTeams = () => {
        const allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
        const c1 = allNumbers.sort(() => 0.5 - Math.random()).slice(0, 4)
        const c2 = allNumbers.filter(num => !c1.includes(num))
        setCommand1(c1)
        setCommand2(c2)
    }

    const mixCommanders = () => {
        const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
        const c1 = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
        const c2 = numbers.filter(num => num !== c1).splice(Math.floor(Math.random() * numbers.length), 1)[0];
        setCommander1(c1)
        setCommander2(c2)
    }

    const mixDota = () => {
        const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const c1 = allNumbers.sort(() => 0.5 - Math.random()).slice(0, 5)
        const c2 = allNumbers.filter(num => !c1.includes(num))
        setDota1(c1)
        setDota2(c2)
    }

    const finpHandler = (e: string) => {
        if (/^\d*$/.test(e)) {
            setInput1(e);
        }
    }

    const sinpHandler = (e: string) => {
        if (/^\d*$/.test(e)) {
            setInput2(e);
        }
    }

    const randomHandler = () => {
        if (input1 > input2) { return; }
        if (!input1) { return; }
        if (!input2) { return; }
        setIsClicked(true)
        setRandomNumber(Math.floor(Math.random() * (parseInt(input2) - parseInt(input1) + 1)) + parseInt(input1))
    }

    useEffect(() => {
        mixTeams()
        mixCommanders()
        mixDota()
    }, []);

    return (
        <div className={`${main.main} w100 cw`}>
            <div className={`${main.navbar} w100 df aic jcsb`}>
                <div className={`${main.left} df aic h100`}>
                    <a href="https://github.com/aianov" target='_blank'><AiOutlineGithub size={30} /></a>
                    <a href="https://twitter.com/nicsfiftyone" target='_blank'><AiOutlineTwitter size={30} /></a>
                    <a href="https://www.twitch.tv/nicsfiftyseven" target='_blank'><FaTwitch size={30} /></a>
                    <a href="https://discord.gg/XJzhhuNjws" target='_blank'><FaDiscord size={30} /></a>
                </div>
                <div className={`${main.right} df h100`}>
                    <div className={`${main.navbtn} df aic cp`}>ААА Бля</div>
                    <div className={`${main.navbtn} df aic cp`}>Сайт</div>
                    <div className={`${main.navbtn} df aic cp`}>Создал</div>
                    <div className={`${main.navbtn} df aic cp h100`}>nics57</div>
                </div>
            </div>
            <div className={`${main.header} w100`}>
                <div className={`${main.profession} w100 df jcc aic`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="688" viewBox="0 0 1440 688" fill="none">
                        <g filter="url(#filter0_f_1_292)">
                            <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint0_radial_1_292)" />
                            <path d="M1320.74 478.236C1365.87 447.623 1384.32 414.102 1374.38 380.79C1364.44 347.479 1326.43 315.457 1263.89 287.703C1201.34 259.948 1116.29 237.36 1016.64 222.04C916.985 206.719 805.966 199.163 693.899 200.074C581.832 200.984 472.355 210.331 375.644 227.247C278.934 244.162 198.128 268.097 140.739 296.826C83.3494 325.555 51.2388 358.146 47.3917 391.57C43.5446 424.993 68.0858 458.164 118.734 488H711.5L1320.74 478.236Z" fill="url(#paint1_linear_1_292)" fill-opacity="0.4" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_292" x="-153" y="0" width="1730" height="688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_292" />
                            </filter>
                            <radialGradient id="paint0_radial_1_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(616 322.625) rotate(70.6997) scale(290.452 941.811)">
                                <stop stop-color="#621ABE" />
                                <stop offset="1" stop-color="#24214B" stop-opacity="0" />
                            </radialGradient>
                            <linearGradient id="paint1_linear_1_292" x1="899.5" y1="398.795" x2="410.252" y2="378.496" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF9C54" />
                                <stop offset="0.459917" stop-color="white" stop-opacity="0.540083" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='tac'>Лучший Микс<br />Сайт!<br /></p>
                </div>
                <div className={`${main.content} w100 df jcc`}>
                    <div className={`${main.mixdiv} df fdc aic`}>
                        <div className={`${main.image} w100 df jcc aic`}>
                            <img src="/images/cwbwi.png" alt="cwbw image" />
                        </div>
                        <div className={`${main.top} w100`}>
                            <p>{command1}</p>
                            <p>{command2}</p>
                        </div>
                        <div className={`${main.bottom} df jcc aic`}>
                            <div className={`${main.mixbtn} df jcc aic cp`} onClick={mixTeams}>Микс Команд</div>
                        </div>
                    </div>
                    <div className={`${main.mixdiv} df fdc aic`}>
                        <div className={`${main.image} w100 df jcc aic`}>
                            <img src="/images/commanders.png" alt="commanders image ХВАХВАХВА" />
                        </div>
                        <div className={`${main.top} w100`}>
                            <p>{commander1}</p>
                            <p style={{ backgroundColor: 'lime', color: 'black' }}>{commander2}</p>
                        </div>
                        <div className={`${main.bottom} df jcc aic`}>
                            <div className={`${main.mixbtn} df jcc aic cp`} onClick={mixCommanders}>Микс Командиров</div>
                        </div>
                    </div>
                    <div className={`${main.mixdiv} df fdc aic`}>
                        <div className={`${main.image} w100 df jcc aic`}>
                            <img src="/images/dota.jpg" alt="dota2 image" />
                        </div>
                        <div className={`${main.top} w100`}>
                            <p>{dota1}</p>
                            <p>{dota2}</p>
                        </div>
                        <div className={`${main.bottom} df jcc aic`}>
                            <div className={`${main.mixbtn} df jcc aic cp`} onClick={mixDota}>Микс Дота-команд</div>
                        </div>
                    </div>
                </div>
                <div className={`${main.randomize} w100 df fdc jcc aic`}>
                    <p style={{ fontSize: '25px', marginBottom: '5px' }}>Рандомайзер</p>
                    <div className={`${main.container} df fdc jcc aic`}>
                        <div className={`${main.image} w100`}>
                            <img src="/images/randomize.jpg" alt="randomize image" />
                        </div>
                        <div className={`${main.flex} df jcc aic`}>
                            <div className={`${main.left} w50 df fdc aic`}>
                                <input type="text" maxLength={10} onChange={e => finpHandler(e.target.value)} value={input1} placeholder='Минимальное значение' />
                                <input type="text" maxLength={10} onChange={e => sinpHandler(e.target.value)} value={input2} placeholder='Максимальное значение' />
                            </div>
                            <div className={`${main.right} w50 df fdc aic`}>
                                <div className={`${main.top} w100 df jcc aic`}>
                                    <p>{isClicked ? `${randomNumber} ваше число!` : 'Тут ваше число'}</p>
                                </div>
                                <div className={`${main.bottom} w100 df jcc aic`}>
                                    <div className={`${main.btn} df jcc aic cp`} onClick={randomHandler}>Найти число</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${main.contact} w100 df jcc aic`}>
                    <div className={`${main.contactdiv} df`}>
                        <img src='/images/decoration.png' alt="decorations" className={main.decor} />
                        <div className={`${main.left} w50 df fdc aifs`}>
                            <div className={`${main.top} df jcfs`}>
                                <div className={`${main.topme} df jcc aic`}>
                                    <div className={`${main.mylogo} df jcc aic`}>
                                        <img src="/images/channel.jpg" alt="logo if nics57" />
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none">
                                        <g opacity="0.4">
                                            <circle cx="38.5" cy="38.5" r="38.5" fill="url(#paint0_linear_1_194)" fill-opacity="0.2" />
                                            <circle cx="38.5" cy="38.5" r="37.9542" stroke="url(#paint1_linear_1_194)" stroke-opacity="0.2" stroke-width="1.0916" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_1_194" x1="38.5" y1="0" x2="38.5" y2="77" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#83828A" />
                                                <stop offset="1" stop-color="#83828A" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1_194" x1="34.6794" y1="-29.9771" x2="47.1923" y2="49.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="#1D172B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`${main.servicediv} df jcc aic`}>
                                    <div className={`${main.btn} df aic jcc`}>
                                        <TbPointFilled size={15} />
                                        <p>Готов к общению</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${main.bottom} df fdc aifs`}>
                                <p>Обо мне:</p>
                                <p>Меня зовут Дулат, родился 12 августа 2006 года, живу в Казахстане и на данный момент 8-го августа 2023 года я являюсь Junior Frontend Разработчиком. Я надеюсь на вашу поддержку в соц сетях. Я веду стримы так что да, можете заходить и писать или смотреть что-нибудь. Данный сайт был создан мною для fcw пиво миксов. Вы можете поддержать меня донатом за данный созданный сайт. Спасибо! Хорошего дня</p>
                            </div>
                        </div>
                        <div className={`${main.right} w50 df fdc jcfe aifs`}>
                            <div className={`${main.socicons} df jcse aic w100`}>
                                <a href="https://twitter.com/nicsfiftyone" target='_blank'><AiOutlineTwitter size={30} /></a>
                                <a href="https://www.twitch.tv/nicsfiftyseven" target='_blank'><FaTwitch size={30} /></a>
                                <a href="https://discord.gg/XJzhhuNjws" target='_blank'><FaDiscord size={30} /></a>
                            </div>
                            <a href='https://www.donationalerts.com/r/nicsfiftyone' target='_blank' className={`${main.rightbtn} w100 df jcc aic`}>
                                Поддержать донатом! ✨
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${main.footer} df fdc jcc aic w100`}>
                <div className={`${main.text} df`}>
                    <p>Cooked with love in <span>🇰🇿</span> with</p>
                    <div className={`${main.figmaimg} df jcc aic`}>
                        <img src="/images/figma.png" alt="figma" />
                    </div>
                </div>
                <p className={main.endtext}>@nics57 2023</p>
            </div>
        </div>
    )
}

export default App
