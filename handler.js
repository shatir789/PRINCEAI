const _0x18a514 = _0x54db;
function _0x54db(_0x72b05, _0x1dfc85) {
    _0x72b05 = _0x72b05 - 0x1c0;
    const _0xab0d7e = _0xab0d();
    let _0x54dba8 = _0xab0d7e[_0x72b05];
    return _0x54dba8;
}
(function (_0x4c8766, _0x4b07b7) {
    const _0x5a17d0 = _0x54db, _0x3fce7d = _0x4c8766();
    while (!![]) {
        try {
            const _0x5d2c25 = parseInt(_0x5a17d0(0x326)) / 0x1 * (parseInt(_0x5a17d0(0x1d9)) / 0x2) + -parseInt(_0x5a17d0(0x2a8)) / 0x3 + parseInt(_0x5a17d0(0x254)) / 0x4 + -parseInt(_0x5a17d0(0x374)) / 0x5 * (parseInt(_0x5a17d0(0x370)) / 0x6) + parseInt(_0x5a17d0(0x1e0)) / 0x7 * (-parseInt(_0x5a17d0(0x38a)) / 0x8) + -parseInt(_0x5a17d0(0x2fb)) / 0x9 + parseInt(_0x5a17d0(0x32c)) / 0xa * (parseInt(_0x5a17d0(0x391)) / 0xb);
            if (_0x5d2c25 === _0x4b07b7)
                break;
            else
                _0x3fce7d['push'](_0x3fce7d['shift']());
        } catch (_0x4b9c47) {
            _0x3fce7d['push'](_0x3fce7d['shift']());
        }
    }
}(_0xab0d, 0x623fd));
import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { smsg } from './lib/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import _0x4344c9, { join } from 'path';
import {
    unwatchFile,
    watchFile
} from 'fs';
import _0x44b7fe from 'fs';
import _0x3ea6c0 from 'chalk';
import _0x40ce70 from 'ws';
import _0x232116 from 'node-fetch';
import _0x41bcc4 from 'pino';
import './plugins/_prince.js';
let mconn;
const {proto} = (await import(_0x18a514(0x2ad)))[_0x18a514(0x2d1)], isNumber = _0x1d5656 => typeof _0x1d5656 === _0x18a514(0x1cb) && !isNaN(_0x1d5656), delay = _0xc9320 => isNumber(_0xc9320) && new Promise(_0x2143c3 => setTimeout(function () {
        const _0x5e2294 = _0x18a514, _0x11451a = {
                'OZNJt': function (_0x3d6eb3, _0x1e7793) {
                    return _0x3d6eb3(_0x1e7793);
                },
                'xnIeC': function (_0x5bd5b8) {
                    return _0x5bd5b8();
                }
            };
        _0x11451a[_0x5e2294(0x2be)](clearTimeout, this), _0x11451a['xnIeC'](_0x2143c3);
    }, _0xc9320));
export async function handler(_0x3a588c) {
    const _0x2ef4ea = _0x18a514, _0x4d4ea1 = {
            'ZePwx': function (_0x2870f1, _0x2ad6ea) {
                return _0x2870f1 === _0x2ad6ea;
            },
            'PQAKg': function (_0x2c4d7e, _0x4678dc) {
                return _0x2c4d7e(_0x4678dc);
            },
            'dUXOs': function (_0x1eae6c, _0x52ec67) {
                return _0x1eae6c(_0x52ec67);
            },
            'PDsSq': function (_0x31cf76, _0x1b114e) {
                return _0x31cf76 instanceof _0x1b114e;
            },
            'DTOcb': function (_0x49ff38, _0x2a5d58) {
                return _0x49ff38(_0x2a5d58);
            },
            'TmilP': function (_0x4770f1, _0x1b9d34) {
                return _0x4770f1 * _0x1b9d34;
            },
            'mlYir': function (_0x5e4357, _0x297356) {
                return _0x5e4357 - _0x297356;
            },
            'HVCpV': function (_0x58f15c, _0x5e2872) {
                return _0x58f15c == _0x5e2872;
            },
            'guEfA': function (_0x96379e, _0x334ce7) {
                return _0x96379e !== _0x334ce7;
            },
            'uxVHd': 'object',
            'EeTqs': 'prem',
            'BBaYD': function (_0x302b7e, _0x1600f4) {
                return _0x302b7e(_0x1600f4);
            },
            'heWDY': function (_0x290a5f, _0x49a6cb) {
                return _0x290a5f(_0x49a6cb);
            },
            'VZZob': function (_0x5efc7a, _0x5e7f00) {
                return _0x5efc7a in _0x5e7f00;
            },
            'lectR': _0x2ef4ea(0x28c),
            'vROTZ': 'name',
            'MXqAn': function (_0x4ada7f, _0x4dd685) {
                return _0x4ada7f(_0x4dd685);
            },
            'DsGip': _0x2ef4ea(0x1e9),
            'DWsao': function (_0x3deba0, _0x21e894) {
                return _0x3deba0(_0x21e894);
            },
            'EPNME': _0x2ef4ea(0x219),
            'xeEvJ': function (_0x422496, _0x5bf1ed) {
                return _0x422496(_0x5bf1ed);
            },
            'GnFyv': _0x2ef4ea(0x29a),
            'GoblN': function (_0x4fc4fb, _0x14cf2b) {
                return _0x4fc4fb in _0x14cf2b;
            },
            'mdueU': _0x2ef4ea(0x311),
            'TfUqK': function (_0x3c833a, _0xb58976) {
                return _0x3c833a(_0xb58976);
            },
            'BiDXT': function (_0x4eb316, _0x1c76d3) {
                return _0x4eb316 in _0x1c76d3;
            },
            'EFdVb': _0x2ef4ea(0x309),
            'bGkYN': function (_0x3f90af, _0x2db4dc) {
                return _0x3f90af in _0x2db4dc;
            },
            'TWmLG': _0x2ef4ea(0x373),
            'ResyK': _0x2ef4ea(0x256),
            'jfAel': _0x2ef4ea(0x392),
            'hTUmI': 'Novato',
            'eJUPb': _0x2ef4ea(0x389),
            'JNPEO': function (_0x588b5f, _0x1e7366) {
                return _0x588b5f !== _0x1e7366;
            },
            'ZbQev': _0x2ef4ea(0x30a),
            'yEvXM': function (_0x2adc71, _0x1aa208) {
                return _0x2adc71 in _0x1aa208;
            },
            'AwenN': _0x2ef4ea(0x2e8),
            'grnVG': function (_0x518e6b, _0xcebebd) {
                return _0x518e6b in _0xcebebd;
            },
            'LeERh': _0x2ef4ea(0x2a9),
            'NXCIp': 'antiLink2',
            'ITzma': function (_0x36feeb, _0x785fa2) {
                return _0x36feeb in _0x785fa2;
            },
            'gxOqU': _0x2ef4ea(0x342),
            'KwIGE': function (_0x2bf1f1, _0x322512) {
                return _0x2bf1f1 in _0x322512;
            },
            'gsFZR': _0x2ef4ea(0x2c0),
            'HCUNx': 'autoapprove',
            'bPoSW': function (_0x58ce8c, _0x54e95f) {
                return _0x58ce8c in _0x54e95f;
            },
            'FvbmS': _0x2ef4ea(0x35e),
            'nqkjS': _0x2ef4ea(0x1fe),
            'BJyhM': 'antiPorn',
            'NKjCz': function (_0x2c0b60, _0x2643d2) {
                return _0x2c0b60(_0x2643d2);
            },
            'MTcyn': _0x2ef4ea(0x227),
            'csSLw': function (_0x5e6bea, _0x586ac7) {
                return _0x5e6bea in _0x586ac7;
            },
            'NqZlH': _0x2ef4ea(0x1f0),
            'NtCJE': _0x2ef4ea(0x30f),
            'uTQQV': function (_0x7ba621, _0x3c60ca) {
                return _0x7ba621 in _0x3c60ca;
            },
            'KgVuN': _0x2ef4ea(0x2b5),
            'hqiLB': _0x2ef4ea(0x1c0),
            'chIfO': _0x2ef4ea(0x288),
            'ovioN': function (_0x3d3c84, _0x2c17e3) {
                return _0x3d3c84 in _0x2c17e3;
            },
            'yJaEN': 'antdeletelinks',
            'lXggY': function (_0x27275c, _0x244a7b) {
                return _0x27275c in _0x244a7b;
            },
            'GCsFs': _0x2ef4ea(0x354),
            'STaXG': _0x2ef4ea(0x307),
            'LMXJo': 'antiver',
            'YPjgG': function (_0x40c516, _0x575b94) {
                return _0x40c516 in _0x575b94;
            },
            'abNKf': 'nsfw',
            'Cixhz': 'antiThreads',
            'CgyFP': function (_0x5c0f57, _0x46567b) {
                return _0x5c0f57 in _0x46567b;
            },
            'xRBXA': _0x2ef4ea(0x21f),
            'WsiHu': 'antiTiktok',
            'dPcVY': _0x2ef4ea(0x28b),
            'jLFtq': _0x2ef4ea(0x1cd),
            'KwTVr': function (_0x5937d2, _0x177462) {
                return _0x5937d2 in _0x177462;
            },
            'hlOwv': _0x2ef4ea(0x38f),
            'qHTOP': function (_0x2cf7b9, _0x58eb70) {
                return _0x2cf7b9 in _0x58eb70;
            },
            'gLOoq': _0x2ef4ea(0x350),
            'BsPpO': function (_0x10e240, _0x570e53) {
                return _0x10e240 in _0x570e53;
            },
            'ksWbS': _0x2ef4ea(0x203),
            'sciyv': 'self',
            'DZePj': 'autoread',
            'rAEHe': _0x2ef4ea(0x33e),
            'YjcxR': function (_0x4af49f, _0x237e5f) {
                return _0x4af49f in _0x237e5f;
            },
            'QrdFh': _0x2ef4ea(0x33b),
            'PYOtG': _0x2ef4ea(0x27b),
            'iphFE': function (_0x57482a, _0x2713a6) {
                return _0x57482a in _0x2713a6;
            },
            'yvjxR': function (_0x4b6700, _0x466fa3) {
                return _0x4b6700 in _0x466fa3;
            },
            'btRjK': _0x2ef4ea(0x1f6),
            'LqOeH': function (_0x4e78bb, _0x3eeb9e) {
                return _0x4e78bb in _0x3eeb9e;
            },
            'OKmAj': _0x2ef4ea(0x27c),
            'UxHya': function (_0x269525, _0xc30cef) {
                return _0x269525 in _0xc30cef;
            },
            'JionK': _0x2ef4ea(0x1db),
            'MsNPb': function (_0x2916db, _0x2d84c8) {
                return _0x2916db in _0x2d84c8;
            },
            'TKWun': 'modoia',
            'dENzA': 'jadibotmd',
            'xBjmJ': _0x2ef4ea(0x2fe),
            'USpkA': _0x2ef4ea(0x1fa),
            'ErIcX': function (_0x214a00, _0x2bc552) {
                return _0x214a00 !== _0x2bc552;
            },
            'NisBk': 'status@broadcast',
            'Nbbqf': function (_0x1a85c0, _0x2ba51a) {
                return _0x1a85c0 !== _0x2ba51a;
            },
            'PRupf': 'string',
            'nFNDn': _0x2ef4ea(0x200),
            'MjfxF': '@lid',
            'vmCID': _0x2ef4ea(0x2b7),
            'IodcE': function (_0x589516, _0x490c9b) {
                return _0x589516 > _0x490c9b;
            },
            'TWIkP': _0x2ef4ea(0x1ce),
            'ImVGA': function (_0x3887e1, _0x1f040e) {
                return _0x3887e1 || _0x1f040e;
            },
            'Bqaze': function (_0x254a59, _0x51eca9, _0x22b450) {
                return _0x254a59(_0x51eca9, _0x22b450);
            },
            'ZuilN': _0x2ef4ea(0x343),
            'HufYM': _0x2ef4ea(0x2f2),
            'mlGKr': _0x2ef4ea(0x24e),
            'JUFFq': function (_0x57cb30, _0x1e046a) {
                return _0x57cb30 === _0x1e046a;
            },
            'YQhEd': _0x2ef4ea(0x21d),
            'YFknY': _0x2ef4ea(0x378),
            'TPeMP': function (_0x570086, _0x11ec83) {
                return _0x570086 * _0x11ec83;
            },
            'ceLZq': _0x2ef4ea(0x202),
            'FtFOO': function (_0x4947c0, _0x129c6e) {
                return _0x4947c0 === _0x129c6e;
            },
            'jDeNZ': _0x2ef4ea(0x339),
            'mnIkv': _0x2ef4ea(0x22d),
            'MQYIU': function (_0xef7465, _0x2aaf4b, _0x180c9e) {
                return _0xef7465(_0x2aaf4b, _0x180c9e);
            },
            'ECeZy': _0x2ef4ea(0x259),
            'PHtJS': 'admin',
            'AoQQO': function (_0x478a40, _0x308cbe) {
                return _0x478a40 instanceof _0x308cbe;
            },
            'LgxZa': function (_0x14a81f, _0x5a2fa1) {
                return _0x14a81f(_0x5a2fa1);
            },
            'MYusG': function (_0x547b6c, _0x2b40b8) {
                return _0x547b6c !== _0x2b40b8;
            },
            'nvYOW': function (_0x4fb6bf, _0x3db01a) {
                return _0x4fb6bf in _0x3db01a;
            },
            'BslpD': function (_0x5b9ffc, _0x457435) {
                return _0x5b9ffc != _0x457435;
            },
            'ezMoa': _0x2ef4ea(0x214),
            'DCXNi': function (_0x41a2d1, _0x428c4e) {
                return _0x41a2d1 != _0x428c4e;
            },
            'Teobu': function (_0x3452e8, _0x402107) {
                return _0x3452e8 && _0x402107;
            },
            'hRhBk': function (_0xcb13cf, _0x2b0e4e) {
                return _0xcb13cf || _0x2b0e4e;
            },
            'KECfs': function (_0xb5e30a, _0x62756b, _0xd87432, _0x2a4181) {
                return _0xb5e30a(_0x62756b, _0xd87432, _0x2a4181);
            },
            'bctym': function (_0x27f56f, _0x5572c8, _0x1856d5, _0x1a4d6d) {
                return _0x27f56f(_0x5572c8, _0x1856d5, _0x1a4d6d);
            },
            'KDynh': _0x2ef4ea(0x33c),
            'jWFxh': function (_0x49cf06, _0x1e9701, _0x249eb6, _0x4fe8ec) {
                return _0x49cf06(_0x1e9701, _0x249eb6, _0x4fe8ec);
            },
            'xhoqu': 'rowner',
            'xJMwF': function (_0x4e8ea8, _0x373e86, _0x353d47, _0x4c6672) {
                return _0x4e8ea8(_0x373e86, _0x353d47, _0x4c6672);
            },
            'XPMnU': _0x2ef4ea(0x1d1),
            'AHSIa': _0x2ef4ea(0x294),
            'yPJXQ': _0x2ef4ea(0x2de),
            'TAFTB': function (_0xb3f648, _0x134f17, _0x5d3812, _0xc1658d) {
                return _0xb3f648(_0x134f17, _0x5d3812, _0xc1658d);
            },
            'MoZNl': function (_0x49d2ad, _0x466915, _0x650e5d, _0x3b6036) {
                return _0x49d2ad(_0x466915, _0x650e5d, _0x3b6036);
            },
            'rsuLy': _0x2ef4ea(0x2fd),
            'uTUjl': function (_0x5d2179, _0x43f0d1) {
                return _0x5d2179 == _0x43f0d1;
            },
            'bHRbO': _0x2ef4ea(0x390),
            'hKWeA': function (_0x5e1b79, _0x2bf64c) {
                return _0x5e1b79 > _0x2bf64c;
            },
            'AOWPE': _0x2ef4ea(0x1e6),
            'ncmlz': function (_0x4047d6, _0x21e257) {
                return _0x4047d6 < _0x21e257;
            },
            'oLLyK': _0x2ef4ea(0x237),
            'gRdlj': function (_0x11c35c, _0x1249c1) {
                return _0x11c35c * _0x1249c1;
            },
            'PrKtc': _0x2ef4ea(0x1eb),
            'ysZvt': function (_0x18f786, _0x58a582) {
                return _0x18f786(_0x58a582);
            },
            'DnXNh': function (_0x3fad78, _0x2b48ef) {
                return _0x3fad78 != _0x2b48ef;
            },
            'zIsML': function (_0x1d9371, _0x42dfa9) {
                return _0x1d9371(_0x42dfa9);
            },
            'icAyY': function (_0x5713b8, _0x42703b) {
                return _0x5713b8 != _0x42703b;
            },
            'aLJSO': function (_0x44273a, _0x11f014) {
                return _0x44273a != _0x11f014;
            },
            'gZVIA': 'noprint',
            'LGckQ': function (_0x2bb901, _0x2b80f2) {
                return _0x2bb901 === _0x2b80f2;
            },
            'lSfrB': _0x2ef4ea(0x292),
            'DczAb': _0x2ef4ea(0x36a),
            'AJZkB': function (_0x4e555f, _0x36ce9f) {
                return _0x4e555f === _0x36ce9f;
            },
            'ZdStr': function (_0x28f016, _0x4d898c) {
                return _0x28f016 || _0x4d898c;
            },
            'clDcD': _0x2ef4ea(0x240),
            'gktKq': '❤‍🩹',
            'WKUup': _0x2ef4ea(0x359),
            'esCve': function (_0x1a4517, _0x3d9b26) {
                return _0x1a4517(_0x3d9b26);
            },
            'ULwwl': function (_0x3e585f, _0x8036c6) {
                return _0x3e585f(_0x8036c6);
            }
        };
    this[_0x2ef4ea(0x29e)] = this['msgqueque'] || [], this[_0x2ef4ea(0x239)] = this[_0x2ef4ea(0x239)] || Date[_0x2ef4ea(0x362)]();
    if (!_0x3a588c)
        return;
    this[_0x2ef4ea(0x1d5)](_0x3a588c[_0x2ef4ea(0x349)])[_0x2ef4ea(0x291)](console['error']);
    let _0x1e30af = _0x3a588c[_0x2ef4ea(0x349)][_0x4d4ea1[_0x2ef4ea(0x31e)](_0x3a588c[_0x2ef4ea(0x349)]['length'], 0x1)];
    if (!_0x1e30af)
        return;
    if (_0x4d4ea1[_0x2ef4ea(0x36b)](global['db'][_0x2ef4ea(0x396)], null))
        await global[_0x2ef4ea(0x300)]();
    try {
        _0x1e30af = smsg(this, _0x1e30af) || _0x1e30af;
        if (!_0x1e30af)
            return;
        global[_0x2ef4ea(0x286)] = _0x1e30af, mconn = _0x1e30af, _0x1e30af[_0x2ef4ea(0x1d2)] = 0x0, _0x1e30af[_0x2ef4ea(0x2c6)] = ![], _0x1e30af[_0x2ef4ea(0x33f)] = ![];
        try {
            let _0x555422 = global['db']['data'][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]];
            if (_0x4d4ea1[_0x2ef4ea(0x369)](typeof _0x555422, _0x4d4ea1[_0x2ef4ea(0x260)]))
                global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]] = {};
            if (_0x555422) {
                const _0x1f84c2 = _0x2ef4ea(0x361)[_0x2ef4ea(0x2df)]('|');
                let _0x4e97fc = 0x0;
                while (!![]) {
                    switch (_0x1f84c2[_0x4e97fc++]) {
                    case '0':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x312)] in _0x555422))
                            _0x555422[_0x2ef4ea(0x261)] = ![];
                        continue;
                    case '1':
                        if (!_0x4d4ea1[_0x2ef4ea(0x352)](isNumber, _0x555422['coin']))
                            _0x555422[_0x2ef4ea(0x1dc)] = 0x0;
                        continue;
                    case '2':
                        if (!_0x4d4ea1['heWDY'](isNumber, _0x555422[_0x2ef4ea(0x324)]))
                            _0x555422[_0x2ef4ea(0x324)] = 0x0;
                        continue;
                    case '3':
                        if (!_0x4d4ea1[_0x2ef4ea(0x385)](_0x4d4ea1[_0x2ef4ea(0x2c9)], _0x555422))
                            _0x555422['language'] = 'en';
                        continue;
                    case '4':
                        if (!_0x555422[_0x2ef4ea(0x1e9)]) {
                            if (!_0x4d4ea1['VZZob'](_0x4d4ea1[_0x2ef4ea(0x2f1)], _0x555422))
                                _0x555422[_0x2ef4ea(0x2d8)] = _0x1e30af[_0x2ef4ea(0x2d8)];
                            if (!_0x4d4ea1[_0x2ef4ea(0x352)](isNumber, _0x555422[_0x2ef4ea(0x1e7)]))
                                _0x555422['age'] = -0x1;
                            if (!_0x4d4ea1[_0x2ef4ea(0x23a)](isNumber, _0x555422['regTime']))
                                _0x555422[_0x2ef4ea(0x20f)] = -0x1;
                        }
                        continue;
                    case '5':
                        if (!_0x4d4ea1['VZZob'](_0x4d4ea1['DsGip'], _0x555422))
                            _0x555422[_0x2ef4ea(0x1e9)] = ![];
                        continue;
                    case '6':
                        if (!_0x555422[_0x2ef4ea(0x302)])
                            _0x555422[_0x2ef4ea(0x302)] = 0x0;
                        continue;
                    case '7':
                        if (!_0x4d4ea1[_0x2ef4ea(0x385)]('autolevelup', _0x555422))
                            _0x555422[_0x2ef4ea(0x1c6)] = ![];
                        continue;
                    case '8':
                        if (!_0x4d4ea1[_0x2ef4ea(0x352)](isNumber, _0x555422['diamond']))
                            _0x555422['diamond'] = 0x14;
                        continue;
                    case '9':
                        if (!_0x4d4ea1[_0x2ef4ea(0x328)](isNumber, _0x555422['level']))
                            _0x555422[_0x2ef4ea(0x313)] = 0x0;
                        continue;
                    case '10':
                        if (!isNumber(_0x555422[_0x2ef4ea(0x1d2)]))
                            _0x555422[_0x2ef4ea(0x1d2)] = 0x0;
                        continue;
                    case '11':
                        if (!_0x4d4ea1['VZZob'](_0x4d4ea1['EPNME'], _0x555422))
                            _0x555422[_0x2ef4ea(0x219)] = ![];
                        continue;
                    case '12':
                        if (!_0x4d4ea1['xeEvJ'](isNumber, _0x555422[_0x2ef4ea(0x35c)]))
                            _0x555422['afk'] = -0x1;
                        continue;
                    case '13':
                        if (!_0x4d4ea1[_0x2ef4ea(0x385)](_0x4d4ea1[_0x2ef4ea(0x279)], _0x555422))
                            _0x555422[_0x2ef4ea(0x29a)] = _0x2ef4ea(0x299);
                        continue;
                    case '14':
                        if (!_0x4d4ea1[_0x2ef4ea(0x248)](_0x4d4ea1['mdueU'], _0x555422))
                            _0x555422['namebebot'] = '';
                        continue;
                    case '15':
                        if (!_0x4d4ea1['TfUqK'](isNumber, _0x555422['lastclaim']))
                            _0x555422[_0x2ef4ea(0x346)] = 0x0;
                        continue;
                    case '16':
                        if (!_0x4d4ea1[_0x2ef4ea(0x24b)](_0x4d4ea1[_0x2ef4ea(0x25c)], _0x555422))
                            _0x555422[_0x2ef4ea(0x309)] = '';
                        continue;
                    case '17':
                        if (!_0x4d4ea1['bGkYN'](_0x4d4ea1[_0x2ef4ea(0x2dd)], _0x555422))
                            _0x555422['genero'] = _0x2ef4ea(0x389);
                        continue;
                    case '18':
                        if (!_0x4d4ea1[_0x2ef4ea(0x273)](_0x4d4ea1[_0x2ef4ea(0x319)], _0x555422))
                            _0x555422['chatbot'] = ![];
                        continue;
                    case '19':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x318)] in _0x555422))
                            _0x555422[_0x2ef4ea(0x392)] = ![];
                        continue;
                    case '20':
                        if (!_0x4d4ea1[_0x2ef4ea(0x236)](isNumber, _0x555422[_0x2ef4ea(0x28d)]))
                            _0x555422[_0x2ef4ea(0x28d)] = 0x0;
                        continue;
                    }
                    break;
                }
            } else
                global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]] = {
                    'exp': 0x0,
                    'coin': 0x0,
                    'diamond': 0x14,
                    'bank': 0x0,
                    'lastclaim': 0x0,
                    'registered': ![],
                    'name': _0x1e30af['name'],
                    'age': -0x1,
                    'regTime': -0x1,
                    'afk': -0x1,
                    'afkReason': '',
                    'banned': ![],
                    'warn': 0x0,
                    'level': 0x0,
                    'role': _0x4d4ea1[_0x2ef4ea(0x387)],
                    'autolevelup': ![],
                    'chatbot': ![],
                    'genero': _0x4d4ea1['eJUPb'],
                    'language': 'en',
                    'prem': ![],
                    'premiumTime': 0x0,
                    'namebebot': '',
                    'isbebot': ![]
                };
            let _0x496d2a = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x20d)][_0x1e30af[_0x2ef4ea(0x1dd)]];
            if (_0x4d4ea1[_0x2ef4ea(0x2bf)](typeof _0x496d2a, _0x2ef4ea(0x1ca)))
                global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x20d)][_0x1e30af[_0x2ef4ea(0x1dd)]] = {};
            if (_0x496d2a) {
                const _0x545486 = _0x4d4ea1[_0x2ef4ea(0x255)][_0x2ef4ea(0x2df)]('|');
                let _0x18db00 = 0x0;
                while (!![]) {
                    switch (_0x545486[_0x18db00++]) {
                    case '0':
                        if (!_0x4d4ea1[_0x2ef4ea(0x1d4)](_0x4d4ea1[_0x2ef4ea(0x320)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x2e8)] = ![];
                        continue;
                    case '1':
                        if (!_0x4d4ea1[_0x2ef4ea(0x376)](_0x2ef4ea(0x217), _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x217)] = '';
                        continue;
                    case '2':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x287)] in _0x496d2a))
                            _0x496d2a['detect'] = ![];
                        continue;
                    case '3':
                        if (!(_0x4d4ea1['NXCIp'] in _0x496d2a))
                            _0x496d2a['antiLink2'] = ![];
                        continue;
                    case '4':
                        if (!_0x4d4ea1['yEvXM'](_0x2ef4ea(0x1c7), _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1c7)] = ![];
                        continue;
                    case '5':
                        if (!_0x4d4ea1[_0x2ef4ea(0x2cb)](_0x2ef4ea(0x215), _0x496d2a))
                            _0x496d2a['antiDiscord'] = ![];
                        continue;
                    case '6':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x23c)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x342)] = ![];
                        continue;
                    case '7':
                        if (!_0x4d4ea1[_0x2ef4ea(0x2ef)]('sDemote', _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x2a4)] = '';
                        continue;
                    case '8':
                        if (!(_0x2ef4ea(0x211) in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x211)] = ![];
                        continue;
                    case '9':
                        if (!_0x4d4ea1[_0x2ef4ea(0x24b)](_0x4d4ea1['gsFZR'], _0x496d2a))
                            _0x496d2a['useDocument'] = ![];
                        continue;
                    case '10':
                        if (!_0x4d4ea1[_0x2ef4ea(0x24b)](_0x4d4ea1[_0x2ef4ea(0x2dc)], _0x496d2a))
                            _0x496d2a['autoapprove'] = ![];
                        continue;
                    case '11':
                        if (!_0x4d4ea1[_0x2ef4ea(0x345)](_0x2ef4ea(0x32a), _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x32a)] = ![];
                        continue;
                    case '12':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x22b)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x35e)] = ![];
                        continue;
                    case '13':
                        if (!_0x4d4ea1['yEvXM'](_0x4d4ea1[_0x2ef4ea(0x330)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1fe)] = ![];
                        continue;
                    case '14':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x268)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x277)] = !![];
                        continue;
                    case '15':
                        if (!_0x4d4ea1['NKjCz'](isNumber, _0x496d2a['expired']))
                            _0x496d2a[_0x2ef4ea(0x2d5)] = 0x0;
                        continue;
                    case '16':
                        if (!_0x4d4ea1['KwIGE'](_0x4d4ea1[_0x2ef4ea(0x21a)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x227)] = ![];
                        continue;
                    case '17':
                        if (!_0x4d4ea1[_0x2ef4ea(0x275)](_0x4d4ea1[_0x2ef4ea(0x335)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1f0)] = ![];
                        continue;
                    case '18':
                        if (!_0x4d4ea1[_0x2ef4ea(0x24b)](_0x4d4ea1[_0x2ef4ea(0x263)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x30f)] = ![];
                        continue;
                    case '19':
                        if (!_0x4d4ea1[_0x2ef4ea(0x377)](_0x4d4ea1[_0x2ef4ea(0x2d4)], _0x496d2a))
                            _0x496d2a['antiSticker'] = ![];
                        continue;
                    case '20':
                        if (!_0x4d4ea1['VZZob'](_0x4d4ea1['hqiLB'], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1c0)] = !![];
                        continue;
                    case '21':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x319)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x256)] = ![];
                        continue;
                    case '22':
                        if (!_0x4d4ea1[_0x2ef4ea(0x345)](_0x4d4ea1[_0x2ef4ea(0x1d8)], _0x496d2a))
                            _0x496d2a['sWelcome'] = '';
                        continue;
                    case '23':
                        if (!_0x4d4ea1[_0x2ef4ea(0x315)](_0x4d4ea1['yJaEN'], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x2b9)] = !![];
                        continue;
                    case '24':
                        if (!_0x4d4ea1['lXggY']('sPromote', _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1f2)] = '';
                        continue;
                    case '25':
                        if (!_0x4d4ea1[_0x2ef4ea(0x376)](_0x4d4ea1[_0x2ef4ea(0x388)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x354)] = ![];
                        continue;
                    case '26':
                        if (!_0x4d4ea1[_0x2ef4ea(0x376)](_0x4d4ea1['STaXG'], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x307)] = ![];
                        continue;
                    case '27':
                        if (!_0x4d4ea1[_0x2ef4ea(0x315)](_0x4d4ea1[_0x2ef4ea(0x235)], _0x496d2a))
                            _0x496d2a['antiver'] = ![];
                        continue;
                    case '28':
                        if (!_0x4d4ea1[_0x2ef4ea(0x1cf)](_0x4d4ea1[_0x2ef4ea(0x242)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x21c)] = ![];
                        continue;
                    case '29':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x205)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x2a1)] = ![];
                        continue;
                    case '30':
                        if (!_0x4d4ea1['CgyFP'](_0x4d4ea1['xRBXA'], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x21f)] = ![];
                        continue;
                    case '31':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x1f8)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x2f0)] = ![];
                        continue;
                    case '32':
                        if (!(_0x4d4ea1[_0x2ef4ea(0x2e9)] in _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x28b)] = ![];
                        continue;
                    case '33':
                        if (!_0x4d4ea1[_0x2ef4ea(0x385)](_0x4d4ea1[_0x2ef4ea(0x37c)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x1cd)] = ![];
                        continue;
                    case '34':
                        if (!_0x4d4ea1[_0x2ef4ea(0x1d4)]('antiTwitch', _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x325)] = ![];
                        continue;
                    case '35':
                        if (!_0x4d4ea1[_0x2ef4ea(0x2ab)](_0x2ef4ea(0x304), _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x304)] = !![];
                        continue;
                    case '36':
                        if (!_0x4d4ea1[_0x2ef4ea(0x376)](_0x4d4ea1[_0x2ef4ea(0x26f)], _0x496d2a))
                            _0x496d2a['antiYoutube'] = ![];
                        continue;
                    case '37':
                        if (!_0x4d4ea1['qHTOP'](_0x4d4ea1[_0x2ef4ea(0x2ec)], _0x496d2a))
                            _0x496d2a['isBanned'] = ![];
                        continue;
                    case '38':
                        if (!_0x4d4ea1['BsPpO'](_0x4d4ea1[_0x2ef4ea(0x38e)], _0x496d2a))
                            _0x496d2a[_0x2ef4ea(0x203)] = ![];
                        continue;
                    }
                    break;
                }
            } else
                global['db']['data'][_0x2ef4ea(0x20d)][_0x1e30af[_0x2ef4ea(0x1dd)]] = {
                    'antiDelete': !![],
                    'antdeletelinks': ![],
                    'antiSticker': ![],
                    'antiToxic': ![],
                    'antiver': !![],
                    'antiPorn': !![],
                    'anticmds': ![],
                    'antiLink2': ![],
                    'testf': ![],
                    'antiTiktok': ![],
                    'antiYoutube': ![],
                    'antiTelegram': ![],
                    'antiFacebook': ![],
                    'antiInstagram': ![],
                    'antiTwitter': ![],
                    'antiDiscord': ![],
                    'antiThreads': ![],
                    'antiTwitch': ![],
                    'antifake': ![],
                    'antiBotClone': ![],
                    'antiBot': ![],
                    'modoadmin': ![],
                    'detect': ![],
                    'autoapprove': ![],
                    'expired': 0x0,
                    'getmsg': !![],
                    'isBanned': ![],
                    'nsfw': ![],
                    'sBye': '',
                    'sDemote': '',
                    'simi': ![],
                    'sPromote': '',
                    'sticker': ![],
                    'sWelcome': '',
                    'useDocument': ![],
                    'viewOnce': ![],
                    'viewStory': ![],
                    'welcome': ![],
                    'princechat': ![],
                    'chatbot': ![]
                };
            if (!global['db'])
                global['db'] = {};
            if (!global['db']['data'])
                global['db'][_0x2ef4ea(0x396)] = {};
            if (!global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)])
                global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)] = {};
            if (this[_0x2ef4ea(0x2a7)] && this['user'][_0x2ef4ea(0x212)]) {
                var _0x4bc90b = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this['user']['jid']];
                (_0x4d4ea1[_0x2ef4ea(0x2bf)](typeof _0x4bc90b, _0x4d4ea1['uxVHd']) || _0x4d4ea1[_0x2ef4ea(0x1c1)](_0x4bc90b, null)) && (global['db'][_0x2ef4ea(0x396)]['settings'][this[_0x2ef4ea(0x2a7)][_0x2ef4ea(0x212)]] = {}, _0x4bc90b = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this[_0x2ef4ea(0x2a7)]['jid']]);
                if (!_0x4d4ea1[_0x2ef4ea(0x22e)](_0x4d4ea1['sciyv'], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x1fc)] = ![];
                if (!_0x4d4ea1[_0x2ef4ea(0x315)](_0x4d4ea1[_0x2ef4ea(0x28a)], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x1e5)] = ![];
                if (!_0x4d4ea1[_0x2ef4ea(0x377)](_0x4d4ea1[_0x2ef4ea(0x208)], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x33e)] = ![];
                if (!_0x4d4ea1['YjcxR'](_0x4d4ea1[_0x2ef4ea(0x1df)], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x33b)] = ![];
                if (!(_0x4d4ea1['PYOtG'] in _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x27b)] = 0x0;
                if (!('pconly' in _0x4bc90b))
                    _0x4bc90b['pconly'] = ![];
                if (!_0x4d4ea1[_0x2ef4ea(0x2ac)](_0x2ef4ea(0x31a), _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x31a)] = ![];
                if (!_0x4d4ea1['yvjxR'](_0x4d4ea1['btRjK'], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x1f6)] = ![];
                if (!_0x4d4ea1[_0x2ef4ea(0x2d2)](_0x4d4ea1[_0x2ef4ea(0x269)], _0x4bc90b))
                    _0x4bc90b['antiPrivate'] = ![];
                if (!_0x4d4ea1[_0x2ef4ea(0x366)](_0x4d4ea1[_0x2ef4ea(0x2b3)], _0x4bc90b))
                    _0x4bc90b['antiCall'] = !![];
                if (!_0x4d4ea1[_0x2ef4ea(0x248)]('antiSpam', _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x34d)] = !![];
                if (!_0x4d4ea1[_0x2ef4ea(0x244)](_0x4d4ea1[_0x2ef4ea(0x266)], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x380)] = ![];
                if (!_0x4d4ea1['YPjgG'](_0x4d4ea1['dENzA'], _0x4bc90b))
                    _0x4bc90b[_0x2ef4ea(0x32f)] = ![];
            } else
                global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this[_0x2ef4ea(0x2a7)]['jid']] = {
                    'self': ![],
                    'autoread': ![],
                    'autoread2': ![],
                    'restrict': ![],
                    'temporal': ![],
                    'antiPrivate': ![],
                    'antiCall': !![],
                    'antiSpam': !![],
                    'modoia': ![],
                    'anticommand': ![],
                    'jadibotmd': ![]
                };
        } catch (_0x44c765) {
            console[_0x2ef4ea(0x24d)](_0x44c765);
        }
        if (opts[_0x4d4ea1[_0x2ef4ea(0x347)]])
            return;
        if (!_0x1e30af[_0x2ef4ea(0x210)] && opts[_0x4d4ea1[_0x2ef4ea(0x2ae)]])
            return;
        if (_0x4bc90b['pconly'] && _0x1e30af['chat'][_0x2ef4ea(0x36f)](_0x2ef4ea(0x1fa)))
            return;
        if (_0x4bc90b['gconly'] && !_0x1e30af['chat'][_0x2ef4ea(0x36f)](_0x4d4ea1[_0x2ef4ea(0x2c7)]))
            return;
        if (opts[_0x2ef4ea(0x2d7)] && _0x4d4ea1[_0x2ef4ea(0x1f1)](_0x1e30af['chat'], _0x4d4ea1[_0x2ef4ea(0x2a0)]))
            return;
        if (_0x4d4ea1['Nbbqf'](typeof _0x1e30af[_0x2ef4ea(0x29f)], _0x4d4ea1[_0x2ef4ea(0x257)]))
            _0x1e30af[_0x2ef4ea(0x29f)] = '';
        let _0x11601c = process[_0x2ef4ea(0x1f4)]['AlwaysOnline'] && process[_0x2ef4ea(0x1f4)]['AlwaysOnline'][_0x2ef4ea(0x37e)]() === _0x2ef4ea(0x292);
        _0x11601c || _0x4bc90b['alwaysonline'] ? conn[_0x2ef4ea(0x371)]('available', _0x1e30af['chat']) : conn[_0x2ef4ea(0x371)](_0x4d4ea1['nFNDn'], _0x1e30af['chat']);
        const _0x57fe46 = _0x1e30af[_0x2ef4ea(0x2da)][_0x2ef4ea(0x356)](_0x4d4ea1[_0x2ef4ea(0x331)]) ? _0x2ef4ea(0x37d) : _0x4d4ea1[_0x2ef4ea(0x285)], _0x148fc7 = conn['user']?.['id']?.[_0x2ef4ea(0x34a)](/:\d+@/, '@'), _0x200026 = global[_0x2ef4ea(0x33c)]['map'](([_0x5b7ebe]) => _0x5b7ebe[_0x2ef4ea(0x34a)](/[^0-9]/g, '') + _0x2ef4ea(0x2b7))['includes'](_0x148fc7), _0x434d99 = _0x200026 || _0x1e30af['fromMe'], _0x9a0caf = _0x434d99 || global[_0x2ef4ea(0x301)][_0x2ef4ea(0x2cd)](_0x244ed7 => _0x244ed7['replace'](/[^0-9]/g, '') + _0x57fe46)[_0x2ef4ea(0x356)](_0x1e30af[_0x2ef4ea(0x2da)]), _0x3cc9da = _0x200026 || _0x4d4ea1[_0x2ef4ea(0x252)](global['db']['data'][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]][_0x2ef4ea(0x302)], 0x0);
        if (opts[_0x4d4ea1['TWIkP']] && _0x1e30af[_0x2ef4ea(0x29f)] && !_0x4d4ea1[_0x2ef4ea(0x2f4)](_0x9a0caf, _0x3cc9da)) {
            let _0x5cd251 = this[_0x2ef4ea(0x29e)], _0x37cf59 = _0x4d4ea1['TmilP'](0x3e8, 0x5);
            const _0x2afa3e = _0x5cd251[_0x5cd251[_0x2ef4ea(0x2cf)] - 0x1];
            _0x5cd251[_0x2ef4ea(0x2ba)](_0x1e30af['id'] || _0x1e30af[_0x2ef4ea(0x36c)]['id']), _0x4d4ea1['Bqaze'](setInterval, async function () {
                const _0x423f0c = _0x2ef4ea;
                if (_0x4d4ea1[_0x423f0c(0x1c1)](_0x5cd251[_0x423f0c(0x34b)](_0x2afa3e), -0x1))
                    _0x4d4ea1['PQAKg'](clearInterval, this);
                await _0x4d4ea1['dUXOs'](delay, _0x37cf59);
            }, _0x37cf59);
        }
        if (_0x1e30af['id'][_0x2ef4ea(0x2ff)](_0x4d4ea1[_0x2ef4ea(0x25f)]) || _0x1e30af['id'][_0x2ef4ea(0x2ff)](_0x4d4ea1[_0x2ef4ea(0x2cc)]) || _0x1e30af['id'][_0x2ef4ea(0x2ff)]('EvoGlobalBot-') || _0x1e30af['id'][_0x2ef4ea(0x2ff)](_0x4d4ea1[_0x2ef4ea(0x231)]) && _0x4d4ea1[_0x2ef4ea(0x31b)](_0x1e30af['id'][_0x2ef4ea(0x2cf)], 0x10) || _0x1e30af['id'][_0x2ef4ea(0x2ff)](_0x4d4ea1['YQhEd']) || _0x1e30af['id'][_0x2ef4ea(0x2ff)](_0x4d4ea1[_0x2ef4ea(0x395)]) && _0x1e30af['id'][_0x2ef4ea(0x2cf)] === 0x14 || _0x1e30af['id']['startsWith'](_0x2ef4ea(0x1f9)))
            return;
        if (_0x1e30af[_0x2ef4ea(0x271)] || isBaileysFail && _0x4d4ea1[_0x2ef4ea(0x1c1)](_0x1e30af?.['sender'], mconn?.['conn']?.[_0x2ef4ea(0x2a7)]?.['jid']))
            return;
        if (process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x397)] && _0x4d4ea1['JUFFq'](process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x397)]['toLowerCase'](), _0x2ef4ea(0x2fd)) && !_0x4d4ea1[_0x2ef4ea(0x2f4)](_0x200026, _0x434d99))
            return;
        _0x1e30af[_0x2ef4ea(0x1d2)] += Math['ceil'](_0x4d4ea1[_0x2ef4ea(0x31d)](Math['random'](), 0xa));
        let _0x31793c, _0x3bf299 = global['db']['data'] && global['db']['data'][_0x2ef4ea(0x2b1)] && global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]];
        const _0x234847 = (_0x1e30af[_0x2ef4ea(0x253)] ? (conn[_0x2ef4ea(0x20d)][_0x1e30af[_0x2ef4ea(0x1dd)]] || {})[_0x2ef4ea(0x241)] || await this[_0x2ef4ea(0x1ed)](_0x1e30af[_0x2ef4ea(0x1dd)])[_0x2ef4ea(0x291)](_0x2cceb3 => null) : {}) || {}, _0x3019ab = (_0x1e30af[_0x2ef4ea(0x253)] ? _0x234847['participants'] : []) || [];
        let _0x224ea5 = (conn[_0x2ef4ea(0x2a7)][_0x2ef4ea(0x34c)] || '')[_0x2ef4ea(0x34a)](/:.*/, '') || ![];
        const _0x2c7246 = _0x1e30af['sender'][_0x2ef4ea(0x356)](_0x4d4ea1[_0x2ef4ea(0x331)]) ? _0x224ea5 + _0x2ef4ea(0x37d) : conn[_0x2ef4ea(0x2a7)][_0x2ef4ea(0x212)], _0x140560 = (_0x1e30af[_0x2ef4ea(0x253)] ? _0x3019ab[_0x2ef4ea(0x297)](_0x334aa3 => conn[_0x2ef4ea(0x332)](_0x334aa3['id']) === _0x1e30af[_0x2ef4ea(0x2da)]) : {}) || {}, _0x120e52 = (_0x1e30af[_0x2ef4ea(0x253)] ? _0x3019ab[_0x2ef4ea(0x297)](_0x41d880 => conn[_0x2ef4ea(0x332)](_0x41d880['id']) == _0x2c7246) : {}) || {}, _0xb02c54 = _0x140560?.['admin'] == _0x2ef4ea(0x2f9) || ![], _0x410965 = _0xb02c54 || _0x140560?.[_0x2ef4ea(0x26b)] == _0x2ef4ea(0x26b) || ![], _0x8248fa = _0x120e52?.['admin'] || ![];
        _0x1e30af[_0x2ef4ea(0x225)] = _0x4d4ea1[_0x2ef4ea(0x1c1)](global['conn'][_0x2ef4ea(0x238)]?.['creds']?.[_0x2ef4ea(0x272)], _0x4d4ea1[_0x2ef4ea(0x2b2)]) || _0x4d4ea1[_0x2ef4ea(0x2f3)](global['conn'][_0x2ef4ea(0x238)]?.['creds']?.['platform'], _0x4d4ea1['jDeNZ']), _0x1e30af[_0x2ef4ea(0x317)] = _0x1e30af[_0x2ef4ea(0x1dd)][_0x2ef4ea(0x356)](_0x4d4ea1[_0x2ef4ea(0x2f5)]) || _0x1e30af['sender'][_0x2ef4ea(0x356)](_0x2ef4ea(0x22d));
        const _0x1fbda3 = _0x4344c9['join'](_0x4344c9[_0x2ef4ea(0x2db)](fileURLToPath(import.meta.url)), _0x2ef4ea(0x243));
        for (let _0x3396a7 in global[_0x2ef4ea(0x22a)]) {
            let _0xd2d7ca = global['plugins'][_0x3396a7];
            if (!_0xd2d7ca)
                continue;
            if (_0xd2d7ca[_0x2ef4ea(0x26c)])
                continue;
            const _0x49c373 = _0x4d4ea1[_0x2ef4ea(0x323)](join, _0x1fbda3, _0x3396a7);
            if (_0x4d4ea1[_0x2ef4ea(0x2f3)](typeof _0xd2d7ca['all'], _0x4d4ea1[_0x2ef4ea(0x283)]))
                try {
                    await _0xd2d7ca[_0x2ef4ea(0x31f)][_0x2ef4ea(0x33d)](this, _0x1e30af, {
                        'chatUpdate': _0x3a588c,
                        '__dirname': _0x1fbda3,
                        '__filename': _0x49c373
                    });
                } catch (_0x28fc52) {
                    console[_0x2ef4ea(0x24d)](_0x28fc52);
                    for (let [_0x1147b1] of global[_0x2ef4ea(0x33c)][_0x2ef4ea(0x2e5)](([_0x56dfec, _0x1726c2, _0x56d3c7]) => _0x56d3c7 && _0x56dfec)) {
                        let _0x1aa1b7 = (await conn[_0x2ef4ea(0x2c5)](_0x1147b1))[0x0] || {};
                        if (_0x1aa1b7[_0x2ef4ea(0x393)])
                            _0x1e30af[_0x2ef4ea(0x293)]((_0x2ef4ea(0x2d3) + _0x3396a7 + '\x0a*👤\x20Sender:*\x20' + _0x1e30af[_0x2ef4ea(0x2da)] + _0x2ef4ea(0x37a) + _0x1e30af['chat'] + _0x2ef4ea(0x222) + _0x1e30af[_0x2ef4ea(0x29f)] + _0x2ef4ea(0x1d6))[_0x2ef4ea(0x1c3)](), _0x1aa1b7['jid']);
                    }
                }
            if (!opts[_0x4d4ea1['QrdFh']]) {
                if (_0xd2d7ca[_0x2ef4ea(0x338)] && _0xd2d7ca[_0x2ef4ea(0x338)][_0x2ef4ea(0x356)](_0x4d4ea1[_0x2ef4ea(0x25e)]))
                    continue;
            }
            const _0x24a4c8 = _0x393fa5 => _0x393fa5[_0x2ef4ea(0x34a)](/[|\\{}()[\]^$+*?.]/g, '\x5c$&');
            let _0x4a7e25 = _0xd2d7ca[_0x2ef4ea(0x337)] ? _0xd2d7ca['customPrefix'] : conn[_0x2ef4ea(0x1ef)] ? conn[_0x2ef4ea(0x1ef)] : global[_0x2ef4ea(0x1ef)], _0x372591 = (_0x4d4ea1[_0x2ef4ea(0x1ec)](_0x4a7e25, RegExp) ? [[
                        _0x4a7e25[_0x2ef4ea(0x2aa)](_0x1e30af[_0x2ef4ea(0x29f)]),
                        _0x4a7e25
                    ]] : Array['isArray'](_0x4a7e25) ? _0x4a7e25['map'](_0x18b0a6 => {
                    const _0x54e72f = _0x2ef4ea;
                    let _0xcdde0b = _0x4d4ea1[_0x54e72f(0x30b)](_0x18b0a6, RegExp) ? _0x18b0a6 : new RegExp(_0x4d4ea1[_0x54e72f(0x27e)](_0x24a4c8, _0x18b0a6));
                    return [
                        _0xcdde0b[_0x54e72f(0x2aa)](_0x1e30af[_0x54e72f(0x29f)]),
                        _0xcdde0b
                    ];
                }) : _0x4d4ea1[_0x2ef4ea(0x1c1)](typeof _0x4a7e25, _0x4d4ea1[_0x2ef4ea(0x257)]) ? [[
                        new RegExp(_0x4d4ea1[_0x2ef4ea(0x295)](_0x24a4c8, _0x4a7e25))[_0x2ef4ea(0x2aa)](_0x1e30af[_0x2ef4ea(0x29f)]),
                        new RegExp(_0x4d4ea1[_0x2ef4ea(0x1e4)](_0x24a4c8, _0x4a7e25))
                    ]] : [[
                        [],
                        new RegExp()
                    ]])[_0x2ef4ea(0x297)](_0x59e196 => _0x59e196[0x1]);
            if (_0x4d4ea1[_0x2ef4ea(0x31b)](typeof _0xd2d7ca['before'], _0x4d4ea1['ECeZy'])) {
                if (await _0xd2d7ca['before'][_0x2ef4ea(0x33d)](this, _0x1e30af, {
                        'match': _0x372591,
                        'conn': this,
                        'participants': _0x3019ab,
                        'groupMetadata': _0x234847,
                        'user': _0x140560,
                        'bot': _0x120e52,
                        'isROwner': _0x200026,
                        'isOwner': _0x434d99,
                        'isRAdmin': _0xb02c54,
                        'isAdmin': _0x410965,
                        'isBotAdmin': _0x8248fa,
                        'isPrems': _0x3cc9da,
                        'chatUpdate': _0x3a588c,
                        '__dirname': _0x1fbda3,
                        '__filename': _0x49c373
                    }))
                    continue;
            }
            if (_0x4d4ea1[_0x2ef4ea(0x21b)](typeof _0xd2d7ca, 'function'))
                continue;
            if (_0x31793c = (_0x372591[0x0] || '')[0x0]) {
                let _0x48e2a5 = _0x1e30af[_0x2ef4ea(0x29f)][_0x2ef4ea(0x34a)](_0x31793c, ''), [_0x4f0275, ..._0x27e7a0] = _0x48e2a5['trim']()[_0x2ef4ea(0x2df)]` `[_0x2ef4ea(0x2e5)](_0x99d2cc => _0x99d2cc);
                _0x27e7a0 = _0x27e7a0 || [];
                let _0xc5e676 = _0x48e2a5[_0x2ef4ea(0x1c3)]()['split']` `['slice'](0x1), _0x2bcb89 = _0xc5e676[_0x2ef4ea(0x281)]` `;
                _0x4f0275 = _0x4d4ea1[_0x2ef4ea(0x2f4)](_0x4f0275, '')[_0x2ef4ea(0x37e)]();
                let _0x35b6eb = _0xd2d7ca[_0x2ef4ea(0x2b8)] || global[_0x2ef4ea(0x265)], _0x4b85fe = _0x4d4ea1[_0x2ef4ea(0x1ec)](_0xd2d7ca[_0x2ef4ea(0x2c8)], RegExp) ? _0xd2d7ca['command'][_0x2ef4ea(0x2f6)](_0x4f0275) : Array[_0x2ef4ea(0x1e2)](_0xd2d7ca[_0x2ef4ea(0x2c8)]) ? _0xd2d7ca[_0x2ef4ea(0x2c8)][_0x2ef4ea(0x333)](_0x31d41f => _0x31d41f instanceof RegExp ? _0x31d41f[_0x2ef4ea(0x2f6)](_0x4f0275) : _0x31d41f === _0x4f0275) : _0x4d4ea1[_0x2ef4ea(0x31b)](typeof _0xd2d7ca['command'], _0x2ef4ea(0x32d)) ? _0x4d4ea1['JUFFq'](_0xd2d7ca[_0x2ef4ea(0x2c8)], _0x4f0275) : ![];
                if (!_0x4b85fe)
                    continue;
                _0x1e30af['plugin'] = _0x3396a7;
                if (_0x1e30af[_0x2ef4ea(0x1dd)] in global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x20d)] || _0x4d4ea1[_0x2ef4ea(0x305)](_0x1e30af['sender'], global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)])) {
                    let _0x591c73 = global['db'][_0x2ef4ea(0x396)]['chats'][_0x1e30af['chat']], _0x28e02f = global['db'][_0x2ef4ea(0x396)]['users'][_0x1e30af['sender']];
                    if (_0x4d4ea1[_0x2ef4ea(0x1de)](_0x3396a7, _0x4d4ea1['ezMoa']) && _0x591c73?.[_0x2ef4ea(0x350)])
                        return;
                    global[_0x2ef4ea(0x1c2)]['includes'](_0x1e30af[_0x2ef4ea(0x2da)][_0x2ef4ea(0x34a)](/[^0-9]/g, '')) && (global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)][_0x1e30af['sender']] = global['db'][_0x2ef4ea(0x396)]['users'][_0x1e30af[_0x2ef4ea(0x2da)]] || {}, global['db'][_0x2ef4ea(0x396)]['users'][_0x1e30af[_0x2ef4ea(0x2da)]][_0x2ef4ea(0x392)] = !![]);
                    if (_0x4d4ea1[_0x2ef4ea(0x2e1)](_0x3396a7, _0x2ef4ea(0x336)) && _0x28e02f?.['banned'])
                        return;
                }
                let _0x1a9e22 = _0x4a7e25, _0x250cff = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x20d)][_0x1e30af[_0x2ef4ea(0x1dd)]][_0x2ef4ea(0x28b)], _0x44d95a = '' + (plugins[_0x2ef4ea(0x2de)] || plugins[_0x2ef4ea(0x26b)] || plugins[_0x2ef4ea(0x294)] || plugins || _0x48e2a5 || _0x1a9e22 || _0x1e30af['text'][_0x2ef4ea(0x340)](0x0, 0x1) == _0x1a9e22 || plugins[_0x2ef4ea(0x2c8)]);
                if (_0x4d4ea1['Teobu'](_0x250cff, !_0x434d99) && !_0x200026 && _0x1e30af[_0x2ef4ea(0x253)] && !_0x410965 && _0x44d95a)
                    return;
                if (_0xd2d7ca['rowner'] && _0xd2d7ca[_0x2ef4ea(0x33c)] && !_0x4d4ea1[_0x2ef4ea(0x384)](_0x200026, _0x434d99)) {
                    _0x4d4ea1[_0x2ef4ea(0x327)](_0x35b6eb, _0x2ef4ea(0x33c), _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x334)] && _0xd2d7ca[_0x2ef4ea(0x33c)] && !(_0x200026 || _0x434d99)) {
                    _0x4d4ea1[_0x2ef4ea(0x234)](_0x35b6eb, _0x4d4ea1['KDynh'], _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x334)] && !_0x434d99) {
                    _0x4d4ea1[_0x2ef4ea(0x24a)](_0x35b6eb, _0x4d4ea1['xhoqu'], _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x334)] && !_0x200026) {
                    _0x4d4ea1[_0x2ef4ea(0x234)](_0x35b6eb, _0x4d4ea1[_0x2ef4ea(0x26a)], _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca['owner'] && !_0x434d99) {
                    _0x35b6eb(_0x4d4ea1[_0x2ef4ea(0x298)], _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x301)] && !_0x9a0caf) {
                    _0x4d4ea1[_0x2ef4ea(0x2e3)](_0x35b6eb, _0x2ef4ea(0x301), _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x1d1)] && !_0x3cc9da) {
                    _0x4d4ea1[_0x2ef4ea(0x234)](_0x35b6eb, _0x4d4ea1[_0x2ef4ea(0x23f)], _0x1e30af, this);
                    continue;
                }
                if (_0xd2d7ca[_0x2ef4ea(0x294)] && !_0x1e30af['isGroup']) {
                    _0x35b6eb(_0x4d4ea1['AHSIa'], _0x1e30af, this);
                    continue;
                } else {
                    if (_0xd2d7ca[_0x2ef4ea(0x2de)] && !_0x8248fa) {
                        _0x35b6eb(_0x4d4ea1[_0x2ef4ea(0x394)], _0x1e30af, this);
                        continue;
                    } else {
                        if (_0xd2d7ca[_0x2ef4ea(0x26b)] && !_0x410965) {
                            _0x4d4ea1[_0x2ef4ea(0x341)](_0x35b6eb, _0x4d4ea1[_0x2ef4ea(0x25e)], _0x1e30af, this);
                            continue;
                        }
                    }
                }
                if (_0xd2d7ca[_0x2ef4ea(0x2fd)] && _0x1e30af[_0x2ef4ea(0x253)]) {
                    _0x4d4ea1['MoZNl'](_0x35b6eb, _0x4d4ea1['rsuLy'], _0x1e30af, this);
                    continue;
                }
                if (_0x4d4ea1[_0x2ef4ea(0x21e)](_0xd2d7ca[_0x2ef4ea(0x276)], !![]) && _0x3bf299[_0x2ef4ea(0x1e9)] == ![]) {
                    _0x35b6eb(_0x4d4ea1[_0x2ef4ea(0x2fa)], _0x1e30af, this);
                    continue;
                }
                _0x1e30af[_0x2ef4ea(0x30e)] = !![];
                let _0x40c683 = _0x2ef4ea(0x1d2) in _0xd2d7ca ? parseInt(_0xd2d7ca['exp']) : 0x11;
                if (_0x4d4ea1[_0x2ef4ea(0x278)](_0x40c683, 0xc8))
                    _0x1e30af['reply'](_0x4d4ea1[_0x2ef4ea(0x2e0)]);
                else
                    _0x1e30af[_0x2ef4ea(0x1d2)] += _0x40c683;
                if (!_0x3cc9da && _0xd2d7ca[_0x2ef4ea(0x289)] && _0x4d4ea1[_0x2ef4ea(0x2bd)](global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x2b1)][_0x1e30af[_0x2ef4ea(0x2da)]][_0x2ef4ea(0x289)], _0x4d4ea1[_0x2ef4ea(0x1cc)](_0xd2d7ca[_0x2ef4ea(0x289)], 0x1))) {
                    this['reply'](_0x1e30af[_0x2ef4ea(0x1dd)], '🟥\x20You\x20don\x27t\x20have\x20enough\x20gold', _0x1e30af);
                    continue;
                }
                if (_0x4d4ea1[_0x2ef4ea(0x252)](_0xd2d7ca['level'], _0x3bf299[_0x2ef4ea(0x313)])) {
                    this[_0x2ef4ea(0x293)](_0x1e30af[_0x2ef4ea(0x1dd)], _0x2ef4ea(0x329) + _0xd2d7ca['level'] + _0x2ef4ea(0x383) + _0x3bf299[_0x2ef4ea(0x313)], _0x1e30af);
                    continue;
                }
                let _0x214527 = {
                    'match': _0x372591,
                    'usedPrefix': _0x31793c,
                    'noPrefix': _0x48e2a5,
                    '_args': _0xc5e676,
                    'args': _0x27e7a0,
                    'command': _0x4f0275,
                    'text': _0x2bcb89,
                    'conn': this,
                    'participants': _0x3019ab,
                    'groupMetadata': _0x234847,
                    'user': _0x140560,
                    'bot': _0x120e52,
                    'isROwner': _0x200026,
                    'isOwner': _0x434d99,
                    'isRAdmin': _0xb02c54,
                    'isAdmin': _0x410965,
                    'isBotAdmin': _0x8248fa,
                    'isPrems': _0x3cc9da,
                    'chatUpdate': _0x3a588c,
                    '__dirname': _0x1fbda3,
                    '__filename': _0x49c373
                };
                try {
                    await _0xd2d7ca[_0x2ef4ea(0x33d)](this, _0x1e30af, _0x214527);
                    if (!_0x3cc9da)
                        _0x1e30af[_0x2ef4ea(0x289)] = _0x1e30af[_0x2ef4ea(0x289)] || _0xd2d7ca[_0x2ef4ea(0x289)] || ![];
                } catch (_0xc8bd2) {
                    _0x1e30af[_0x2ef4ea(0x24d)] = _0xc8bd2, console[_0x2ef4ea(0x24d)](_0xc8bd2);
                    if (_0xc8bd2) {
                        let _0x4dbe6d = _0x4d4ea1['DTOcb'](format, _0xc8bd2);
                        for (let _0x369118 of Object['values'](global['APIKeys']))
                            _0x4dbe6d = _0x4dbe6d['replace'](new RegExp(_0x369118, 'g'), _0x4d4ea1['oLLyK']);
                        if (_0xc8bd2[_0x2ef4ea(0x2d8)])
                            for (let [_0x1291d9] of global['owner']['filter'](([_0x31f625, _0x4c5304, _0x1840ef]) => _0x1840ef && _0x31f625)) {
                                let _0x20abae = (await this[_0x2ef4ea(0x2c5)](_0x1291d9))[0x0] || {};
                                if (_0x20abae[_0x2ef4ea(0x393)])
                                    return _0x1e30af['reply']((_0x2ef4ea(0x2b6) + _0x1e30af[_0x2ef4ea(0x1f7)] + _0x2ef4ea(0x2e6) + _0x1e30af[_0x2ef4ea(0x2da)] + _0x2ef4ea(0x37a) + _0x1e30af[_0x2ef4ea(0x1dd)] + _0x2ef4ea(0x222) + _0x31793c + _0x4f0275 + '\x20' + _0x27e7a0[_0x2ef4ea(0x281)]('\x20') + '\x0a📄\x20*Error\x20Logs:*\x0a\x0a' + _0x4dbe6d)[_0x2ef4ea(0x1c3)](), _0x20abae[_0x2ef4ea(0x212)]);
                            }
                        _0x1e30af[_0x2ef4ea(0x293)](_0x4dbe6d);
                    }
                } finally {
                    if (_0x4d4ea1[_0x2ef4ea(0x1c1)](typeof _0xd2d7ca[_0x2ef4ea(0x20c)], _0x2ef4ea(0x259)))
                        try {
                            await _0xd2d7ca['after'][_0x2ef4ea(0x33d)](this, _0x1e30af, _0x214527);
                        } catch (_0x1c411d) {
                            console[_0x2ef4ea(0x24d)](_0x1c411d);
                        }
                    if (_0x1e30af['credit'])
                        _0x1e30af[_0x2ef4ea(0x293)](_0x2ef4ea(0x30d) + +_0x1e30af[_0x2ef4ea(0x289)] + '*');
                }
                break;
            }
        }
    } catch (_0x15b9fe) {
        console[_0x2ef4ea(0x24d)](_0x15b9fe);
    } finally {
        if (opts[_0x4d4ea1['TWIkP']] && _0x1e30af[_0x2ef4ea(0x29f)]) {
            const _0x22b039 = this[_0x2ef4ea(0x29e)][_0x2ef4ea(0x34b)](_0x1e30af['id'] || _0x1e30af[_0x2ef4ea(0x36c)]['id']);
            if (_0x4d4ea1[_0x2ef4ea(0x1f1)](_0x22b039, -0x1))
                this[_0x2ef4ea(0x29e)][_0x2ef4ea(0x258)](_0x22b039, 0x1);
        }
        let _0x2c3630, _0x2a13f9 = global['db']['data'][_0x2ef4ea(0x26e)];
        if (_0x1e30af) {
            _0x1e30af[_0x2ef4ea(0x2da)] && (_0x2c3630 = global['db']['data']['users'][_0x1e30af[_0x2ef4ea(0x2da)]]) && (_0x2c3630[_0x2ef4ea(0x1d2)] += _0x1e30af[_0x2ef4ea(0x1d2)], _0x2c3630[_0x2ef4ea(0x289)] -= _0x4d4ea1['gRdlj'](_0x1e30af[_0x2ef4ea(0x289)], 0x1), _0x2c3630['bank'] -= _0x1e30af['bank'], _0x2c3630[_0x2ef4ea(0x1da)] -= _0x1e30af[_0x2ef4ea(0x1da)]);
            let _0x5dd668;
            if (_0x1e30af[_0x2ef4ea(0x1f7)]) {
                let _0x18a640 = +new Date();
                if (_0x4d4ea1[_0x2ef4ea(0x366)](_0x1e30af[_0x2ef4ea(0x1f7)], _0x2a13f9)) {
                    const _0x20133f = _0x4d4ea1['PrKtc'][_0x2ef4ea(0x2df)]('|');
                    let _0x481faf = 0x0;
                    while (!![]) {
                        switch (_0x20133f[_0x481faf++]) {
                        case '0':
                            if (!isNumber(_0x5dd668['last']))
                                _0x5dd668[_0x2ef4ea(0x2d6)] = _0x18a640;
                            continue;
                        case '1':
                            if (!_0x4d4ea1['ysZvt'](isNumber, _0x5dd668[_0x2ef4ea(0x245)]))
                                _0x5dd668['lastSuccess'] = _0x4d4ea1[_0x2ef4ea(0x375)](_0x1e30af[_0x2ef4ea(0x24d)], null) ? 0x0 : _0x18a640;
                            continue;
                        case '2':
                            if (!_0x4d4ea1['heWDY'](isNumber, _0x5dd668[_0x2ef4ea(0x282)]))
                                _0x5dd668[_0x2ef4ea(0x282)] = 0x1;
                            continue;
                        case '3':
                            if (!_0x4d4ea1[_0x2ef4ea(0x25d)](isNumber, _0x5dd668[_0x2ef4ea(0x1f3)]))
                                _0x5dd668[_0x2ef4ea(0x1f3)] = _0x4d4ea1[_0x2ef4ea(0x1ea)](_0x1e30af[_0x2ef4ea(0x24d)], null) ? 0x0 : 0x1;
                            continue;
                        case '4':
                            _0x5dd668 = _0x2a13f9[_0x1e30af['plugin']];
                            continue;
                        }
                        break;
                    }
                } else
                    _0x5dd668 = _0x2a13f9[_0x1e30af['plugin']] = {
                        'total': 0x1,
                        'success': _0x1e30af['error'] != null ? 0x0 : 0x1,
                        'last': _0x18a640,
                        'lastSuccess': _0x4d4ea1[_0x2ef4ea(0x33a)](_0x1e30af[_0x2ef4ea(0x24d)], null) ? 0x0 : _0x18a640
                    };
                _0x5dd668[_0x2ef4ea(0x282)] += 0x1, _0x5dd668[_0x2ef4ea(0x2d6)] = _0x18a640, _0x1e30af['error'] == null && (_0x5dd668[_0x2ef4ea(0x1f3)] += 0x1, _0x5dd668[_0x2ef4ea(0x245)] = _0x18a640);
            }
        }
        try {
            if (!opts[_0x4d4ea1[_0x2ef4ea(0x23e)]])
                await (await import(_0x2ef4ea(0x247)))[_0x2ef4ea(0x2d1)](_0x1e30af, this);
        } catch (_0x41b4fc) {
            console[_0x2ef4ea(0x207)](_0x1e30af, _0x1e30af[_0x2ef4ea(0x35d)], _0x41b4fc);
        }
        let _0x3a25de = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this[_0x2ef4ea(0x2a7)]['jid']] || {};
        if (opts['autoread'])
            await this[_0x2ef4ea(0x24c)]([_0x1e30af[_0x2ef4ea(0x36c)]]);
        if (_0x3a25de[_0x2ef4ea(0x1c8)])
            await this[_0x2ef4ea(0x24c)]([_0x1e30af[_0x2ef4ea(0x36c)]]);
        let _0x56e795 = global['db']['data']['settings'][this[_0x2ef4ea(0x2a7)][_0x2ef4ea(0x212)]] || {}, _0x3496f6 = process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x32b)] && _0x4d4ea1['FtFOO'](process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x32b)][_0x2ef4ea(0x37e)](), 'true'), _0x590dab = [
                '💚',
                '💛',
                '💓',
                '❤️',
                '💙'
            ], _0x396186 = process[_0x2ef4ea(0x1f4)]['StatusEmojies'] ? process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x34e)][_0x2ef4ea(0x2df)](',') : _0x590dab, _0x107996 = process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x296)] && _0x4d4ea1[_0x2ef4ea(0x2b0)](process[_0x2ef4ea(0x1f4)]['StatusLikes'][_0x2ef4ea(0x37e)](), _0x4d4ea1['lSfrB']);
        if (_0x3496f6 || _0x56e795[_0x2ef4ea(0x35a)]) {
            if (_0x1e30af[_0x2ef4ea(0x36c)][_0x2ef4ea(0x1f5)] === _0x4d4ea1[_0x2ef4ea(0x2a0)] && !_0x1e30af[_0x2ef4ea(0x210)]) {
                await conn[_0x2ef4ea(0x24c)]([_0x1e30af[_0x2ef4ea(0x36c)]]);
                if (_0x56e795['like'] || _0x107996) {
                    const _0x33d09d = _0x396186[Math[_0x2ef4ea(0x228)](_0x4d4ea1[_0x2ef4ea(0x1cc)](Math['random'](), _0x396186['length']))], _0x24fa6b = await conn['decodeJid'](conn[_0x2ef4ea(0x2a7)]['id']);
                    await conn['sendMessage'](_0x1e30af['key']['remoteJid'], {
                        'react': {
                            'key': _0x1e30af[_0x2ef4ea(0x36c)],
                            'text': _0x33d09d
                        }
                    }, {
                        'statusJidList': [
                            _0x1e30af['key']['participant'],
                            _0x24fa6b
                        ]
                    });
                }
            }
        }
        const _0x5c3c83 = process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x379)] ? process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x379)]['toLowerCase']() : null, _0x43daa6 = global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this[_0x2ef4ea(0x2a7)]['jid']]?.['autoreacts'], _0x4fa2ae = typeof _0x1e30af['chat'] === _0x2ef4ea(0x32d) && _0x1e30af[_0x2ef4ea(0x1dd)][_0x2ef4ea(0x36f)](_0x4d4ea1[_0x2ef4ea(0x2a3)]), _0x238ec8 = _0x4d4ea1['FtFOO'](typeof _0x1e30af[_0x2ef4ea(0x1dd)], _0x2ef4ea(0x32d)) && !_0x4fa2ae, _0x12db49 = _0x4d4ea1['JUFFq'](_0x5c3c83, _0x4d4ea1[_0x2ef4ea(0x2af)]) && _0x4d4ea1[_0x2ef4ea(0x2f4)](_0x4fa2ae, _0x238ec8) || _0x4d4ea1[_0x2ef4ea(0x321)](_0x5c3c83, 'group') && _0x4fa2ae || _0x5c3c83 === _0x2ef4ea(0x2fd) && _0x238ec8 || _0x43daa6 && _0x4d4ea1[_0x2ef4ea(0x220)](_0x4fa2ae, _0x238ec8);
        if (_0x12db49 && _0x1e30af[_0x2ef4ea(0x1dd)]) {
            const _0x4a1bc3 = process[_0x2ef4ea(0x1f4)]['autoreactions_emojies'] ? process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x204)][_0x2ef4ea(0x2df)](',') : [
                '💛',
                '🤍',
                '💗',
                '♥️',
                '💞',
                '💖',
                '💓',
                '❤️',
                '🧡',
                '💛',
                '💚',
                '💙',
                '💜',
                '🖤',
                '🤍',
                '💟',
                _0x4d4ea1[_0x2ef4ea(0x2d9)],
                '🥀',
                '🦋',
                '🐣',
                _0x4d4ea1[_0x2ef4ea(0x365)],
                '♥️',
                '🌸',
                '❣️',
                '✨',
                '🎀',
                '🩷',
                '🖤',
                '🤍',
                '🤎',
                '💛',
                '💚',
                '🩵',
                '💙',
                '💜',
                '💟',
                '💓',
                '🩶'
            ];
            _0x1e30af['text'] && _0x1e30af[_0x2ef4ea(0x29f)]['match'](/(prince|a|ا|م|ي|ء|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z)/gi) && await this['sendMessage'](_0x1e30af['chat'], {
                'react': {
                    'text': _0x1e30af[_0x2ef4ea(0x2da)] === _0x4d4ea1[_0x2ef4ea(0x213)] ? '👑' : _0x4d4ea1[_0x2ef4ea(0x322)](_0x4b6616, _0x4a1bc3),
                    'key': _0x1e30af['key']
                }
            }), (_0x1e30af['message']?.[_0x2ef4ea(0x20b)] || _0x1e30af[_0x2ef4ea(0x38d)]?.[_0x2ef4ea(0x381)] || _0x1e30af['message']?.[_0x2ef4ea(0x35b)]) && await this[_0x2ef4ea(0x1d3)](_0x1e30af[_0x2ef4ea(0x1dd)], {
                'react': {
                    'text': _0x4d4ea1[_0x2ef4ea(0x367)](_0x4b6616, _0x4a1bc3),
                    'key': _0x1e30af[_0x2ef4ea(0x36c)]
                }
            });
        }
        function _0x4b6616(_0x40a816) {
            const _0x108264 = _0x2ef4ea;
            return _0x40a816[Math[_0x108264(0x228)](_0x4d4ea1[_0x108264(0x1cc)](Math['random'](), _0x40a816[_0x108264(0x2cf)]))];
        }
        _0x1e30af['fromMe'] && global['db'][_0x2ef4ea(0x396)][_0x2ef4ea(0x218)][this[_0x2ef4ea(0x2a7)][_0x2ef4ea(0x212)]]?.[_0x2ef4ea(0x314)] && this[_0x2ef4ea(0x1d3)](_0x1e30af[_0x2ef4ea(0x1dd)], {
            'react': {
                'text': process[_0x2ef4ea(0x1f4)][_0x2ef4ea(0x270)] || '💛',
                'key': _0x1e30af['key']
            }
        });
    }
}
export async function participantsUpdate({
    id: _0x4a3823,
    participants: _0x40d861,
    action: _0xb960b8
}) {
    const _0xe8de10 = _0x18a514, _0x8dd6fc = {
            'jknQN': _0xe8de10(0x1fc),
            'lIRkC': function (_0x2d7551, _0x2eef86) {
                return _0x2d7551 == _0x2eef86;
            },
            'niLzu': 'remove',
            'eTAsL': 'image',
            'RYeOf': function (_0x447546, _0x26ba24) {
                return _0x447546 === _0x26ba24;
            },
            'yINXG': _0xe8de10(0x26b),
            'kMIan': _0xe8de10(0x201),
            'xnFeq': 'Welcome,\x20@user!',
            'VjtDe': '@subject',
            'qZUKe': _0xe8de10(0x209),
            'ArWPa': _0xe8de10(0x1d0),
            'HUvQk': _0xe8de10(0x206),
            'vSWxR': function (_0x5703b2, _0x1572f2) {
                return _0x5703b2 + _0x1572f2;
            },
            'SGqhM': _0xe8de10(0x2e7),
            'vvqke': 'Halo',
            'civsc': _0xe8de10(0x2b4),
            'Fkoav': _0xe8de10(0x249),
            'oGBNv': _0xe8de10(0x2c3),
            'PrGVq': 'demote',
            'PbTNg': _0xe8de10(0x382),
            'CbapI': '@user\x20```is\x20no\x20longer\x20Admin```'
        };
    if (opts[_0x8dd6fc[_0xe8de10(0x2a2)]])
        return;
    if (this[_0xe8de10(0x32e)])
        return;
    if (_0x8dd6fc[_0xe8de10(0x2f7)](global['db'][_0xe8de10(0x396)], null))
        await loadDatabase();
    let _0x5d5bde = global['db'][_0xe8de10(0x396)][_0xe8de10(0x20d)][_
