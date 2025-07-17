export default function AnimatedCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-10"></div>
      </div>

      <style>{`
        .circles {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .circle {
          position: absolute;
          display: block;
          width: 20px;
          height: 20px;
          background: rgba(61, 82, 160, 0.1);
          animation: animate 25s linear infinite;
          bottom: calc(-150px - 40vh);
          border-radius: 50%;
        }

        .circle-1 {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          animation-duration: 20s;
          background: rgba(112, 145, 230, 0.1);
        }

        .circle-2 {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          animation-duration: 25s;
          background: rgba(134, 151, 196, 0.1);
        }

        .circle-3 {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          animation-duration: 20s;
          background: rgba(173, 187, 212, 0.1);
        }

        .circle-4 {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 15s;
          background: rgba(237, 232, 245, 0.1);
        }

        .circle-5 {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          animation-duration: 20s;
          background: rgba(61, 82, 160, 0.1);
        }

        .circle-6 {
          left: 75%;
          width: 90px;
          height: 90px;
          animation-delay: 0s;
          animation-duration: 25s;
          background: rgba(112, 145, 230, 0.1);
        }

        .circle-7 {
          left: 35%;
          width: 50px;
          height: 50px;
          animation-delay: 0s;
          animation-duration: 30s;
          background: rgba(134, 151, 196, 0.1);
        }

        .circle-8 {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 0s;
          animation-duration: 35s;
          background: rgba(173, 187, 212, 0.1);
        }

        .circle-9 {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 0s;
          animation-duration: 40s;
          background: rgba(237, 232, 245, 0.1);
        }

        .circle-10 {
          left: 85%;
          width: 50px;
          height: 50px;
          animation-delay: 0s;
          animation-duration: 45s;
          background: rgba(61, 82, 160, 0.1);
        }

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-60vh) rotate(360deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}