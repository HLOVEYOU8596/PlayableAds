var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundConst = (function () {
    function SoundConst() {
    }
    SoundConst.click = "data:audio/mp3;base64,SUQzAwAAAAANelRJVDIAAAACAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/80hkAAfYVP5QBGIOCCAGCAAAxgCBfRYRRd8IFFopnXcyYQ6KLCK/4cwgLOJkJAIgQBhYATkPn5OXIH5M/qGT9p+TYB2PKEz+UAHlPjUdmTOfp6IRCxMHgG8IgcGD8mf/AYccN/JqckIm4RAk/u6yH//o+hVyKJIyQbDYAIVNCDumiDBwNzQDAzTc0wgAILz/80hEGwaIV1UvoYwBDFB2cF9FGABFcniYcwxhgmGf9Sb45pQMD0d3/9YPv/+GAGAouoAI3+pziAAAQofAgcJOdznQABA4XHhYBjhpz/6w9YH0f9aP/nwIGCYr2+TE4EXn43I4kR+pZLAaBJEP4R+fMqeO06PzcTmMoeAxQagMUE0DQpFIe2LkM3cDXCCAycD/80hkMA0lkU4AzVQADPCC9weSwQIAMIgMEQL/XxOhfKRLEH/b5mcMzqTf/7Pp3///XqNC+blxL///9D1MgePmhz////8xK5U3oMmpA6kEA1M8rEI7o4BwAAAOri6LQNIWkF+AyYP8DQloI9O6Lic333z7oEDkNr2nHkUN//////8qkQIAA3/g8pXG44TERcn/80hkDgskp2ss5LwAiJiWbAHLYAHTXbWRCplZERBpEiFQqevaKUOEME4RhH2zZxKXAmZcCVkEJQTsggX4cAFcGQD5FKDtDoJ2vRdxbwId1I4McZ5r6zfFKau/earDw8d///OH6AckGRyxc2BOJZkPIYGyy4qK6JDSK2H3Z/oePAEY+pWARuu+SYFpq4VX8BH/80hkDQrEzWkbDSM7CAB2gEYCSkxJLALCMBCxJGc/BBiDb8ZLmSLN//sll6QEFBoKKGarQEmNV//9m9mZv+qWXS2gEaCg46WLEVPAoCNLYn7WX79L6lN0GldAFxYMgR8AP6VZAyAwKikkP3WbCkBYNgT3KBr///////If/xBVdaSBll3++wGfonjaIhRNDdn/80hkEQswaWUvGeNjCJB+ZAQCXkCux0lEiSuZmKdOiBgSq6c3T4GSs4QDS+U2dQqDw7DrYUPQ0pQkOtLD3A2SPJEgcWIixpglEIddiIJDRglEIGO0dSFEv/cr1SSHAtkF06uBYKyPw2EY+zBNNX3fNxWP8HAn///////9H/usqQlZ6/wV41wA6JGESLs3IlT/80hkEAeYVSgEPwNxDOpySADABVDKFFAsgHMPLPNCGYlnJjaYEdiMp5WYPIaUhQlCh5//8v/9YSCp1SwE/9R7/6e95nnnjlWu0qMtQUcH5fl9lggqQozWputVV1EoCJWD0VOIrqlu9w3zXf////3/5S////jKKAa/95rer3JIg01wqEzjeQ8BSSCNM2mtSgf/80hkGgflCR4AZMKCDtJyQAAeRFRcX5AzNxVZRNOqcg+mGP7tUu1xU69r////yf///////0VBP/4ODxaGjzwkbgtjLHAWFgV/C74BPGqaCuosqpK3uXkQmFkWWW56+Ieqke6pL0////7f///////roC////E1DK/fWWss5dOsLl9LKRxKpVR0MSmEulexadn/80hkGgbBOSQANwIcDgiqPAA2hlSi0T/15VsUZzqxWTW/////6////////+////2GD93J3r5QX0dEux1sDwdey1wCOWZxjGNBiZkrS4GUOFs73vzVwATHPQWIpcWEdn/4j////UsPf/WqAirWVfWXfWXJSsCsIOLQMhuD1bEVCYTuSV5jAVwJTJUZV+QDKrP/80hkJgfITyAAMwMqE8iicb4AniVcMQdzGCwqaCJRoDSCaGl2r93////f/8WACZMlu3+AFboGdnwXqa21CdTi32JzNqIqBxav9P4UWJLaYsjGkQgOA5yKS6CcitcMnEpJmt25YtPSnsWFkUegy5DORr2vGFtcVkf///v/tQYmoCqGs4yKpcPyKOwSioTBLND/80hkEwYsQxIAGGwCC0iaMAAyUmnY9XLSsU06I+ZgjARMJGiISIhICwnb7f////9d//21U5psLIlhgohOE5lEm0KRonEoWLjoJCIbFA8SrTZWUeSSykxJJL791JbP3/ZlCV+VVU0000VVVVU0000VX5VTTTTRVVVVTS7///qpt2miq//2kJpoqqqqp////5X/80hkLwg4ApIEBCMAhUABPAwAAABT///////00VX+qmmmmiqqqqmlkAf////rFBbFvFP//9QsKsiooLRZTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
    return SoundConst;
}());
__reflect(SoundConst.prototype, "SoundConst");
//# sourceMappingURL=SoundConst.js.map