/*
Initialize Tile Map Design
r - rocks
p - platforms
e - enemies
k - keys
h - health potions
*/


var tilemap = [
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                rrrrrrrrrr                rrr                                                    w",
    "r                rrrrrrrrrr                rrr                                                    w",
    "r              rrrrrrrrrrrr                 rr                                                    w",
    "r              rrrrrrrrrrrr                 rr                                                    w",
    "r             prrrrrrrrrrrr                  r                                                    w",
    "r              rrrrrrrrrrrr                  r                                                    w",
    "r            prrrrrrrrrrrr                   r          ee e e e e e e e e e                      w",
    "r             rrrrrrrrrrrr                   r                                                    w",
    "r            prrrrrrrrr                      r                                                    w",
    "r             rrrrrrrr                       r                                                    w",
    "rp            rrrrrrrr                       r                                                    w",
    "r            prrrrr                          r                                                    w",
    "r            rrr                             r                                                    w",
    "r            rr                              r                                                    w",
    "r                                            r                                                    w",
    "r hhhhhhhhhhhhhhh                                                                                 w",
    "rppppppppppppppppppppppp                          ppppppppppppppppppppppppppppppppppppppppppppppppw",
    "rrrrrrrrrrrrrrrrrrrrrrrrpp               k    pppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrrrrrrrr                       pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrr                         ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                           ppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                          prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                         prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r          k             prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r    pppppppppppppppppppprrrrrrrrrrrrrrrr                                                         w",
    "r    r                                  r                                                         w",
    "rp  p          e                        r                                                         w",
    "r                                       r                                                         w",
    "rp    ppppp                             r                                                         w",
    "rr     rrrrpppppp                       r                                                         w",
    "rr r   rrrrrrrrrrp            e                                                                   w",
    "rrrrrrrrrrrrrrrrrrpppppppppppppppppppppppppppppppppppppppppppppppppppppppp                        w",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                           r                   w",
    "rrrrrrrrrrrrrrrrrrrrrr                                                                            w",
    "rrrrrrrrr                                                   ppppppppppppppppppppppppppppppppppppppw",
    "rrrrr                                                ppppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                                               pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                                         pppppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                            e   ppppppppprrrrrrrrrrrrrrrrrrrr                                    w",
    "r                        pppppppprrrrrrrrrrrrrrrr                                                 w",
    "r                 ppppppprrrrrrrrrrrrrrrr                                                         w",
    "r            ppppprrrrrrrrrrrrrrrrrrr                                                             w",
    "r                                                                                                 w",
    "r    ppp                                                                                          w",
    "r     r                                                                                           w",
    "rp                                                                                                w",
    "rr                                                                                                w",
    "rpppppppp                                                                                         w",
    "rrrrrrrrrpppppp     k                                                                             w",
    "rrrrrrrrrrrrrrrppppppppp                                                                          w",
    "rrrrrrrrrrrrrrrrrrrrrrrrppp      e                                                                w",
    "r      rrrrrrrrrrrrrrrrrrrrpppppppppppp                                                           w",
    "r             rrrrrrrrrrrrrrrrrrrrrrrrrppppppppppppppppp   k                                      w",
    "r                                 rrrrrrrrrrrrrrrrrrrrrrppppppplppppppp                           w",
    "r                                                                                                 w",
    "r                                                                                                 w",
    "r                                                                                                 w",
    "r                                                              l                                  w",
    "r                                                              l                                  w",
    "r              k                        k                      l                                  w",
    "rpppppppppppppppppppppppppppppppppppppppppppplpppppppppppppppppppppppppppppppppppppppp            w",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrpp           w",
    "rrrrrrrrrrrrrrrrrrrr         wrrrrr          l       rrrrrw                                 ppppppw",
    "rrrrrrrrrrrrr                wrrr            l         rrrw                           pppppprrrrrrw",
    "rrrrrr                       wrr             l          rrw                         prrrrrrrrrrrrrw",
    "rrrr                         wr              l           rw                         rrrrrrrrrrrrrrw",
    "rr                           w               l            w                      ppprrrrrrrrrrrrrrw",
    "r                            w               l            w     ppppppppppppppppprrrrrrrrrrrrrrrrrw",
    "r                                    k       l    h      r     prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                       bbbbbbppppppppppppppppppppppppppp    prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r     h              pppp                                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r  ppppppp           rrrr                                                     rrrrrrrrrrrrrrrrrrrrw",
    "rpprrrrrrrpppppppp                                                                        rrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrppppppp                                                                 rrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrppppp          e                e                                rrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrr       ppppppppp         pppppppp                                rrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrr            rrrrrrr              rrr                             pppprrrrrw",
    "rrrrrrrrrrrrr                        rrrrr                r                             prrrrrrrrrw",
    "rrrrrrrr                               r                           pppp                prrrrrrrrrrw",
    "rrrrr                                                      p        rr             pppprrrrrrrrrrrw",
    "rrr                                                     pppppp                     r              w",
    "r                                                        rrrr                      r              w",
    "r                             k     e                     rr                       r              w",
    "r                    pppppppppppplpppppppppppppppppp                              p               w",
    "r                   prrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrp               rr            r               w",
    "r                  prrrrrrrrrrrrrlrrrrrrrrrrrrrrrrrrrp             rrrr           r               w",
    "r                 prrrrrrrr      l          rrrrrrrrrrp          pprrrrr                       h  w",
    "r                prrrrr          l              rrrrrrrp       pprrrrrrrrr              p      pppw",
    "r       r       p                l                rrrrrrp      rrrrrrrrrrrr      r     pr     prrrw",
    "r      rr  k   p                 l     h            rrrrrp    prrrrrrrrrrrrr  h  r    prr  r  rrrrw",
    "rpppppprrpppppprrrrrrrrrrrrrrrrrprprrrrrrrrrrrrrrrrrrrrrrrpppprrrrrrrrrrrrrrppppprpppprrrpprpprrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrppprrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw"
  
  ];

  var tilemap2 = [

    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrw",
    "r                                                                                                 w",
    "r                                                                                                 w",
    "r                                                                       wwwwwwwwwwwwwwwww         w",
    "r    ppppppppppppppp                                                   w    rrrrrrrrrr            w",
    "r                                                                     w      rrrrrrrr             w",
    "r                                                                    w        wwwwww              w",
    "r                      wwwwwwww                                                rrrr               w",
    "r                     w   e   w                     rrrrrrrrrrrrrrrrrr          ww                w",
    "r                    w        w                                                                   w",
    "r                   w         w         wfffffffw                                                 w",
    "r                  w          w        r wfffffw                        wwwwwwwwwwwwwwwwwwwwwwwww w",
    "r                 w k                 r   wfffw          ppppppppppppppp                          w",
    "rwwwwwwwwwwwwwwwwwpppppppppppplwwwwwwwwwwwppppppppppppppp                                         w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                             l                                                                   w",
    "r                          pppppppppp                  wwwwww                                     w",
    "r                         p          rp       ppppppppp     w                                     w",
    "r                        p                                  w                                     w",
    "r                       p                            l      w                                     w",
    "r                      p    pppp                     l     ww                                     w",
    "r                     p                              l    www                                     w",
    "r     wppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppww",
    "r    w                                                                                           ww",
    "r   w                                                                                       lwwwwww",
    "r  w                                                                                        l    ww",
    "rwwwwwwwwwwwwwwwwwlw        ppppp                                                           l    ww",
    "rw                lw         rrr       rrrrrrrrrrrrrrrrr                                         ww",
    "rwww              lw          r                                                         wwwwwwwwwww",
    "rw                lw                                                                             ww",
    "rw    p           lw                                                                             ww",
    "rw                                                                 w                  w          ww",
    "rwwwppppppppppppppppp                                              p                  w          ww",
    "rwww                 p                                              w                 w          ww",
    "rwww                  p            ppp                              w                 w          ww",
    "rwww                   ll       ppprrr                              w                 w         w w",
    "rwww                   ll    ppprrrrrr                             w                  w       ww  w",
    "rwww                   llwwwwwwwwwwwww                                                w    www    w",
    "r   w                  llrrrrrrrrrrrrr                                                wwwww       w",
    "r    w                 llwwwwwwwwwwwww                             ppppppppppppppppppppw          w",
    "r     w                ll                                                              w          w",
    "r      w       ppppppppppppppppppppppppppppppppp      ppppp                            w          w",
    "r       wwww                                                                      wwwwww          w",
    "r       wwwww                                                              wwwwwww                w",
    "r         wwwwwwwwwwwwwwwwwwwwwwwwwwwwwlwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                       w",
    "r        rrrrrrrrrrrrrrrrrrrr          l   rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                 w",
    "r  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr     l     rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                    w",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr   l        rrrrrrrrrrrrrrrrrrrrrrrrrr                        w",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr  l                            rrrr                          w",
    "r                                      rrrr                                                       w",
    "r                                             r                                                   w",
    "r                                             rrr      r                                          w",
    "r                                                                                                 w",
    "r                                                          pppppppp                               w",
    "r                                               fffffp      wwwwww         wppppppppplppppppppppppw",
    "r                                                fff l       wwww          w         l            w",
    "r                                                fff l        rr           w         l            w",
    "r                                                fff r                     w         l            w",
    "r                                                fff                       w k       l            w",
    "r                                           rrr  fff                       wwwpppppp l            w",
    "r                                                 ff                              ww l            w",
    "r                                                 ff                               wwl            w",
    "r                                                 ff                                 l            w",
    "r                                                 ff                                wlw           w",
    "r                                                 ff                        ppppppppwl wppppppp   w",
    "r                                                 ff                                 l            w",
    "r                                                 ff                                 l            w",
    "r                     rrrrrrrrrrrrrrrrrrrwwwwwwwwwwwwrrr   ppppppppppppppppppppppw   l   wppppppppw",
    "r                                                                                 w  l  w         w",
    "r                                                                                  pplpp          w",
    "r                                                                                    l            w",
    "r                                                                                    l            w",
    "r                                                                                    l            w",
    "r                                                                                    l            w",
    "r                                                        rrrr                        l            w",
    "r                             k     e                     rr                         l            w",
    "r     ppppppppppppppppppppppppppplw                                                  l            w",
    "r    wrrrrrrrrwwwwwwwlllllhlllllllw                                                  l            w",
    "r   wrrwwwwrrrwwwwwwrrrrrrrrrrrrrlw                                           ppppppppppppppppppppw",
    "r  wrrrrrwwrrrwwwwwrrrrrrrrrrrrrrrw           wwww    wwww                   p                 h  w",
    "r           l              rrrrrrrw          wrrrw    wrrw                  p                     w",
    "rwrrrrrrrrrrrrrrr                lw         wrrrrw    wrrr      rrrrrlrrrrrw     r     pr     prrrw",
    "rrrrrrrwwwwwwrwrwrrrrrrrrrrrwrrrrrrwrrrrwrrrrrrrrrrrrrrrrp     wwwwwwlwwwwwr  h  r    prr  r  rrrrw",
    "rppppprwwrrrrrwwrrrrrrrrrrrwrwrrprpwwrrwwrrrrrrrrrrrrrrrrr     wwwwwwlwwwwwrppppprpppprrrpprpprrrrw",
    "rrrrrrrwwwwwrrwrrrrrrrrrrrwwwwwrpppwrwwrwrrrrrrrrrrrrrrrrr     wwwwwwlwwwwwrrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrrrrrwwrrwwrrrrrrrrrwrrrrrwrrrwrrrrwrrrrrrrrrrrrrrrrr         k   h   rrrrrrrrrrrrrrrrrrrrrrrw",
    "rrrrrrwwwwwwrrwrwrrrrrrrwrrrrrrrwrrwrrrrwrrrrrrrrrrrrrrrrrwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrrrrrrrw"
  
  ];
