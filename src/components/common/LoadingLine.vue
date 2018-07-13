<template>
    <div class="loader-line">
        <div class="loader-inner ball-beat">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-line {
        margin-top: 15px;
        text-align: center;
        @-webkit-keyframes ball-beat {
            50% {
                opacity: 0.2;
                -webkit-transform: scale(0.75);
                transform: scale(0.75);
            }

            100% {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }

        @keyframes ball-beat {
            50% {
                opacity: 0.2;
                -webkit-transform: scale(0.75);
                transform: scale(0.75);
            }

            100% {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }

        .ball-beat > div {
            background-color: #fed919;
            width: 14px;
            height: 14px;
            border-radius: 100%;
            margin: 2px;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            display: inline-block;
            -webkit-animation: ball-beat 0.7s 0s infinite linear;
            animation: ball-beat 0.7s 0s infinite linear;
        }
        .ball-beat > div:nth-child(2n-1) {
            -webkit-animation-delay: 0.35s !important;
            animation-delay: 0.35s !important;
        }
    }
</style>
