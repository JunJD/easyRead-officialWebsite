import React from "react";
import styles from "./home.module.scss";
import LottieComponent from "../../components/lottie/index";
import JSONData from "./../../assets/EASY.json";
export default () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.brief}>
        <div className={styles.lottie}>
          <LottieComponent animationData={JSONData} width={112} />
        </div>

        {/* <img src={require('./../../assets/EASY.png')} alt='ZP' /> */}
        <h2>easyRead</h2>
        <ul>
          <li>翻译</li>
          <li>语言学习</li>
          <li>阅读理解</li>
        </ul>
        <p>
          我们的翻译系统使阅读英文书籍对于所有人都变得容易，无论他们的语言水平如何。
        </p>
        <p>
          通过我们的语言学习和翻译系统，您可以在阅读您喜爱的书籍的同时提高英语水平。
        </p>
        <p>
          我们的创新翻译系统专为非英语为母语的读者设计，可以提高阅读理解能力。
        </p>
      </section>
    </div>
  );
};
