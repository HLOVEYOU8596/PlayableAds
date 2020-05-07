// TypeScript file
var snowJson = {
    "texture": "snow.png",
    "emitter": { "x": 800, "y": -150 },
    "maxRadiusVariance": 30,
    "minRadius": 20,
    "endBlue": 255,
    "minRadiusVariance": 10,
    "startSize": 20,
    "tangentialAcceleration": 0,
    "rotatePerSecond": 30,
    "startRedVariance": 0,
    "startBlue": 255,
    "rotatePerSecondVariance": 10,
    "endSize": 10,
    "emitterVariance": { "x": 983, "y": 0 },
    "startGreen": 255,
    "gravity": { "x": 10, "y": 100 },
    "startSizeVariance": 25,
    "startAlpha": 0,
    "endBlueVariance": 0,
    "engGreenVariance": 0,
    "emitAngleVariance": 360,
    "startGreenVariance": 0,
    "endSizeVariance": 5,
    "endAlphaVariance": 0,
    "endAlpha": 1,
    "emitAngle": 128,
    "startRotationVariance": 45,
    "startAlphaVariance": 0,
    "startRed": 255,
    "endRotation": 360,
    "startRotation": 50,
    "endRotationVariance": 292.07,
    "maxRadius": 100,
    "endGreen": 255,
    "endRed": 255,
    "speedVariance": 0,
    "maxParticles": 200,
    "emitterType": 0,
    "blendFactorSource": "one",
    "speed": 30,
    "radialAcceleration": 0,
    "blendFactorDestination": "oneMinusSourceAlpha",
    "radialAccelerationVariance": 0,
    "startBlueVariance": 0,
    "endRedVariance": 0,
    "lifespan": 3500,
    "tangentialAccelerationVariance": 0,
    "lifespanVariance": 700,
    "duration": -1
};
//汉堡位置及其大小
var pointJson = {
    "0_0": { x: 540, y: 516, scale: 1 },
    "0_1": { x: 707, y: 516, scale: 1 },
    "0_2": { x: 874, y: 516, scale: 1 },
    "1_0": { x: 552, y: 424, scale: 0.9 },
    "1_1": { x: 696, y: 424, scale: 0.9 },
    "1_2": { x: 839, y: 424, scale: 0.9 },
    "2_0": { x: 562, y: 342, scale: 0.82 },
    "2_1": { x: 685, y: 342, scale: 0.82 },
    "2_2": { x: 811, y: 342, scale: 0.82 }
};
var coinJson = {
    "texture": "coin.png",
    "startAlphaVariance": 0,
    "maxRadiusVariance": 30,
    "tangentialAccelerationVariance": 0,
    "minRadius": 20,
    "endBlue": 255,
    "maxRadius": 100,
    "minRadiusVariance": 10,
    "startSize": 60,
    "tangentialAcceleration": 0,
    "rotatePerSecond": 30,
    "startSizeVariance": 20,
    "rotatePerSecondVariance": 10,
    "startAlpha": 0.8901960784313725,
    "startRedVariance": 0,
    "endSizeVariance": 10,
    "startBlue": 255,
    "emitAngle": 90,
    "emitter": { "x": 0, "y": 0 },
    "endSize": 40,
    "emitAngleVariance": 360,
    "endAlpha": 1,
    "startRotation": 0,
    "startGreenVariance": 0,
    "startRotationVariance": 45,
    "startBlueVariance": 0,
    "endRotation": 263.58,
    "endGreen": 255,
    "endRotationVariance": 292.07,
    "startGreen": 255,
    "endRedVariance": 0,
    "endBlueVariance": 0,
    "emitterVariance": { "x": 0, "y": 8 },
    "gravity": { "x": 50, "y": 1120 },
    "speedVariance": 0,
    "maxParticles": 500,
    "emitterType": 0,
    "blendFactorSource": "one",
    "speed": 500,
    "radialAcceleration": 0,
    "blendFactorDestination": "oneMinusSourceAlpha",
    "radialAccelerationVariance": 0,
    "engGreenVariance": 0,
    "startRed": 255,
    "endRed": 255,
    "lifespan": 2000,
    "endAlphaVariance": 0,
    "lifespanVariance": 700,
    "duration": 500
};
var smoke_j = {
    "texture": "smoke.png",
    "endSize": 40,
    "startBlue": 255,
    "duration": -1,
    "endGreen": 255,
    "blendFactorSource": "one",
    "startAlphaVariance": 0,
    "radialAcceleration": 0,
    "tangentialAccelerationVariance": 0,
    "emitterVariance": { "x": 20, "y": 20 },
    "tangentialAcceleration": 0,
    "startBlueVariance": 0,
    "lifespan": 250,
    "blendFactorDestination": "oneMinusSourceAlpha",
    "minRadius": 20,
    "lifespanVariance": 600,
    "radialAccelerationVariance": 0,
    "minRadiusVariance": 10,
    "startSize": 30,
    "maxRadiusVariance": 30,
    "rotatePerSecond": 30,
    "startRed": 255,
    "startGreen": 255,
    "endBlueVariance": 0,
    "maxRadius": 100,
    "emitterType": 0,
    "startSizeVariance": 50,
    "emitAngle": 180,
    "rotatePerSecondVariance": 10,
    "endBlue": 255,
    "emitAngleVariance": 360,
    "endSizeVariance": 40,
    "startRotation": 0,
    "startRotationVariance": 45,
    "endRedVariance": 0,
    "engGreenVariance": 0,
    "endRotation": 263.58,
    "endRotationVariance": 292.07,
    "endAlpha": 1,
    "speed": 20,
    "startGreenVariance": 0,
    "endAlphaVariance": 0,
    "gravity": { "x": 0, "y": -60 },
    "endRed": 255,
    "maxParticles": 50,
    "startRedVariance": 0,
    "emitter": { "x": 0, "y": 0 },
    "speedVariance": 0,
    "startAlpha": 0.8901960784313725
};
var mc_j = { "mc": {
        "stream": {
            "frameRate": 24,
            "labels": [
                { "name": "stream", "frame": 1, "end": 25 }
            ],
            "events": [],
            "frames": [
                {
                    "res": "29E2D39E",
                    "x": 14,
                    "y": 4
                },
                {
                    "res": "A5B2AE4E",
                    "x": 13,
                    "y": 4
                },
                {
                    "res": "E789E8E7",
                    "x": 9,
                    "y": 4
                },
                {
                    "res": "FD95F832",
                    "x": 9,
                    "y": 4
                },
                {
                    "res": "FEA0F1F5",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "46E1410B",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "484CA1A0",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "11F328C5",
                    "x": 7,
                    "y": 4
                },
                {
                    "res": "2B56517D",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "B32B60BD",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "E70F92F0",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "E23BDB13",
                    "x": 7,
                    "y": 4
                },
                {
                    "res": "90EB281D",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "BA08724",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "F932D44",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "673F3F38",
                    "x": 7,
                    "y": 4
                },
                {
                    "res": "EBD8DE64",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "C6D45AAB",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "7EC8564C",
                    "x": 6,
                    "y": 4
                },
                {
                    "res": "6694C2D",
                    "x": 7,
                    "y": 4
                },
                {
                    "res": "6E9EDF7E",
                    "x": 8,
                    "y": 4
                },
                {
                    "res": "C417575A",
                    "x": 6,
                    "y": 25
                },
                {
                    "res": "F339025D",
                    "x": 6,
                    "y": 38
                },
                {
                    "res": "9C3A64D9",
                    "x": 7,
                    "y": 63
                },
                {
                    "res": "74E08848",
                    "x": 7,
                    "y": 71
                }
            ]
        }, "clock": {
            "frameRate": 24,
            "labels": [
                { "name": "clock", "frame": 1, "end": 9 }
            ],
            "events": [],
            "frames": [
                {
                    "res": "27528559",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "9C33B63D",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "F38D2214",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "6ED75F14",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "75C08CD2",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "93DE7F9F",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "B4698D4B",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "D93F0A67",
                    "x": 1,
                    "y": 1
                },
                {
                    "res": "11A626D2",
                    "x": 1,
                    "y": 1
                }
            ]
        }, "soil": {
            "frameRate": 24,
            "labels": [
                { "name": "soil", "frame": 1, "end": 30 }
            ],
            "events": [],
            "frames": [
                {
                    "res": "815441F2",
                    "x": 5,
                    "y": 7
                },
                {
                    "res": "F5B39962",
                    "x": 5,
                    "y": 7
                },
                {
                    "res": "7F5D5974",
                    "x": 4,
                    "y": 6
                },
                {
                    "res": "1430D8A9",
                    "x": 4,
                    "y": 6
                },
                {
                    "res": "F9D86441",
                    "x": 3,
                    "y": 7
                },
                {
                    "res": "FE30DD34",
                    "x": 3,
                    "y": 7
                },
                {
                    "res": "E29673B2",
                    "x": 3,
                    "y": 8
                },
                {
                    "res": "D3E7AD4",
                    "x": 3,
                    "y": 8
                },
                {
                    "res": "6BA17BB9",
                    "x": 10,
                    "y": 7
                },
                {
                    "res": "BEA041E5",
                    "x": 10,
                    "y": 7
                },
                {
                    "res": "BB8F1D36",
                    "x": 11,
                    "y": 6
                },
                {
                    "res": "87C7B00F",
                    "x": 11,
                    "y": 6
                },
                {
                    "res": "210B5895",
                    "x": 11,
                    "y": 8
                },
                {
                    "res": "F2A5A7CF",
                    "x": 15,
                    "y": 8
                },
                {
                    "res": "8DFE03CC",
                    "x": 14,
                    "y": 8
                },
                {
                    "res": "F5A574E4",
                    "x": 14,
                    "y": 8
                },
                {
                    "res": "1AD9F9DD",
                    "x": 14,
                    "y": 11
                },
                {
                    "res": "1CF3974A",
                    "x": 14,
                    "y": 11
                },
                {
                    "res": "CE46E147",
                    "x": 13,
                    "y": 9
                },
                {
                    "res": "760B8C2A",
                    "x": 13,
                    "y": 9
                },
                {
                    "res": "187CD62A",
                    "x": 12,
                    "y": 4
                },
                {
                    "res": "258A18B2",
                    "x": 12,
                    "y": 4
                },
                {
                    "res": "A3C8ACAB",
                    "x": 11,
                    "y": 4
                },
                {
                    "res": "B0FE9041",
                    "x": 11,
                    "y": 4
                },
                {
                    "res": "6FB504A2",
                    "x": 10,
                    "y": 5
                },
                {
                    "res": "ACAB9970",
                    "x": 10,
                    "y": 5
                },
                {
                    "res": "FA4CE330",
                    "x": 9,
                    "y": 3
                },
                {
                    "res": "1B8D55BC",
                    "x": 9,
                    "y": 3
                },
                {
                    "res": "66E42874",
                    "x": 6,
                    "y": 7
                },
                {
                    "res": "6B470A6D",
                    "x": 6,
                    "y": 7
                }
            ]
        }
    },
    "res": {
        "27528559": { "x": 0, "y": 0, "w": 63, "h": 63 },
        "B32B60BD": { "x": 0, "y": 277, "w": 35, "h": 87 },
        "FE30DD34": { "x": 0, "y": 130, "w": 98, "h": 34 },
        "E23BDB13": { "x": 74, "y": 283, "w": 35, "h": 87 },
        "90EB281D": { "x": 372, "y": 342, "w": 32, "h": 87 },
        "6694C2D": { "x": 111, "y": 283, "w": 35, "h": 87 },
        "F9D86441": { "x": 330, "y": 139, "w": 98, "h": 34 },
        "87C7B00F": { "x": 193, "y": 175, "w": 93, "h": 35 },
        "FA4CE330": { "x": 130, "y": 65, "w": 92, "h": 38 },
        "11F328C5": { "x": 430, "y": 253, "w": 35, "h": 87 },
        "7EC8564C": { "x": 279, "y": 250, "w": 36, "h": 87 },
        "E789E8E7": { "x": 157, "y": 390, "w": 22, "h": 72 },
        "CE46E147": { "x": 406, "y": 342, "w": 87, "h": 32 },
        "EBD8DE64": { "x": 34, "y": 366, "w": 32, "h": 87 },
        "484CA1A0": { "x": 317, "y": 250, "w": 36, "h": 87 },
        "9C3A64D9": { "x": 230, "y": 105, "w": 35, "h": 28 },
        "ACAB9970": { "x": 100, "y": 141, "w": 91, "h": 36 },
        "673F3F38": { "x": 393, "y": 253, "w": 35, "h": 87 },
        "1CF3974A": { "x": 406, "y": 376, "w": 92, "h": 30 },
        "11A626D2": { "x": 65, "y": 0, "w": 63, "h": 63 },
        "1AD9F9DD": { "x": 237, "y": 372, "w": 92, "h": 30 },
        "1430D8A9": { "x": 318, "y": 102, "w": 99, "h": 35 },
        "6FB504A2": { "x": 419, "y": 65, "w": 91, "h": 36 },
        "BB8F1D36": { "x": 0, "y": 166, "w": 93, "h": 35 },
        "D93F0A67": { "x": 130, "y": 0, "w": 63, "h": 63 },
        "E70F92F0": { "x": 468, "y": 103, "w": 36, "h": 87 },
        "6E9EDF7E": { "x": 338, "y": 339, "w": 32, "h": 87 },
        "6B470A6D": { "x": 297, "y": 214, "w": 95, "h": 34 },
        "B0FE9041": { "x": 288, "y": 175, "w": 88, "h": 37 },
        "7F5D5974": { "x": 318, "y": 65, "w": 99, "h": 35 },
        "F339025D": { "x": 455, "y": 0, "w": 36, "h": 53 },
        "B4698D4B": { "x": 195, "y": 0, "w": 63, "h": 63 },
        "F5A574E4": { "x": 148, "y": 321, "w": 92, "h": 33 },
        "F5B39962": { "x": 130, "y": 105, "w": 98, "h": 34 },
        "2B56517D": { "x": 0, "y": 366, "w": 32, "h": 87 },
        "93DE7F9F": { "x": 260, "y": 0, "w": 63, "h": 63 },
        "46E1410B": { "x": 68, "y": 372, "w": 31, "h": 87 },
        "C6D45AAB": { "x": 37, "y": 277, "w": 35, "h": 87 },
        "A3C8ACAB": { "x": 378, "y": 175, "w": 88, "h": 37 },
        "29E2D39E": { "x": 493, "y": 0, "w": 17, "h": 37 },
        "815441F2": { "x": 230, "y": 139, "w": 98, "h": 34 },
        "FEA0F1F5": { "x": 101, "y": 372, "w": 29, "h": 88 },
        "66E42874": { "x": 200, "y": 214, "w": 95, "h": 34 },
        "BEA041E5": { "x": 184, "y": 250, "w": 93, "h": 34 },
        "BA08724": { "x": 467, "y": 253, "w": 35, "h": 87 },
        "8DFE03CC": { "x": 148, "y": 286, "w": 92, "h": 33 },
        "F38D2214": { "x": 325, "y": 0, "w": 63, "h": 63 },
        "258A18B2": { "x": 394, "y": 214, "w": 87, "h": 37 },
        "6BA17BB9": { "x": 89, "y": 247, "w": 93, "h": 34 },
        "C417575A": { "x": 430, "y": 103, "w": 36, "h": 66 },
        "F2A5A7CF": { "x": 100, "y": 179, "w": 90, "h": 31 },
        "9C33B63D": { "x": 390, "y": 0, "w": 63, "h": 63 },
        "74E08848": { "x": 267, "y": 105, "w": 35, "h": 20 },
        "1B8D55BC": { "x": 224, "y": 65, "w": 92, "h": 38 },
        "187CD62A": { "x": 0, "y": 238, "w": 87, "h": 37 },
        "6ED75F14": { "x": 0, "y": 65, "w": 63, "h": 63 },
        "A5B2AE4E": { "x": 483, "y": 192, "w": 18, "h": 45 },
        "D3E7AD4": { "x": 0, "y": 203, "w": 98, "h": 33 },
        "75C08CD2": { "x": 65, "y": 65, "w": 63, "h": 63 },
        "210B5895": { "x": 242, "y": 339, "w": 94, "h": 31 },
        "FD95F832": { "x": 132, "y": 390, "w": 23, "h": 82 },
        "760B8C2A": { "x": 148, "y": 356, "w": 87, "h": 32 },
        "E29673B2": { "x": 100, "y": 212, "w": 98, "h": 33 },
        "F932D44": { "x": 355, "y": 250, "w": 36, "h": 87 }
    } };
//# sourceMappingURL=PointSheet.js.map