const easing = [.75,0,.17,1]

export const staggerTextSlideUp = (

        idx, 
        delay = 0, 
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"
    
    ) => {

    return (
        {
            initial: {
                y: "100%"
            },
            animate: {
                y: 0,
                transition: {
                    duration, 
                    delay: (idx * 0.02) + delay,
                    ease,
                    type
                }
            }
        }
    )
}

export const textSlideUp = (
    
        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"
    
    ) => {
    
    return (
        {
            initial: {
                y: "110%"
            },
            animate: {
                y: 0,
                transition: {
                    delay,
                    duration,
                    ease: easing,
                    type
                }
            }
        }
    )
}

export const slideLeft = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {

    return (
        {
            initial: {
                x: "100%"
            },
            animate: {
                x: 0,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const fadeUp = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                y: 50,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const arrowFadeUp = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            start: {
                y: 50,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const fade = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}


////// navbar animation start
export const menuAnime = (

    delay = 0,
    duration = .5, 
    ease = "easeInOut", 
    type = "tween"

) => {

return (
    {
        open: {
            width: "100%",
            transition: {
                delay,
                duration,
                ease: easing,
                type
            },
            clipPath:["polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
        },
        closed: {
            width: 0,
            transition: {
                delay:  .7,
                duration,
                ease: easing,
                type
            },
            clipPath:["polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)"]
        }
    }
)
};

export const menuItemsAnime = () => {
return (
    {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                ease: easing
            }
        },
        closed: {
            opacity: 0,
            x: "-50px",
            transition: {
                type: "tween",
                ease: easing
            }
        }
    }
)
};

export const menuStagger = () => {
return (
    {
        open: {
            transition: { staggerChildren:  .2, delayChildren: 2 }
        },
        closed: {
            transition: { staggerChildren: .2, staggerDirection: -1 }
        }
    }
)
};

export const menuIcon = (xOnOpen) => {
return (
    {
        open: {
            x: xOnOpen
        }, 
        closed: {
            x: 0,
            transition: {
                delay: 1.5
            }
        }
    }
)
};

export const menuIconStroke = () => {
return (
    {
        open: {
           stroke: "#000",
           transition: {
               delay: 1.4
           }
        },
        closed: {
            stroke: "#fff",
            transition: {
                delay: 1.4
            }
        }
    }
)
};

////// navbar animation emd

export const pathAni = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                height: 0
            },
            animate: {
                height: "100%",
                transition: {
                    delay,
                    duration,
                    ease: easing,
                    type
                }
            }
        }
    )
}

export const pathAniV2 = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                height: 0
            },
            animateLine: {
                height: "200px",
                transition: {
                    delay,
                    duration,
                    ease: easing,
                    type
                }
            }
        }
    )
}

export const slideUp = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                y: "110%"
            },
            animate: {
                y: 0,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const coverSlideUp = (
    
        delay = 0,
        duration = .5, 
        ease = easing, 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                scaleY: 1.4,
                scaleX: 1.1,
                y: 0
            },
            animate: {
                y: "-130%",
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const fadeLeft = (

        x = "100px",
        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                x,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}



export const coverSlide = (

        delay = 0,
        duration = .5, 
        ease = "easeInOut", 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                x: 0,
            },
            animate: {
                x: "-100%",
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}


export const textSlideUpNoDelay = () => {
    return (
        {
            initial: {
                y: "110%"
            },
            animate: {
                y: 0
            }
        }
    )
}

// logo animaions start
export const logoBGAni = (delay = 0) => {
    return (
        {
            x: ["-100%", "0%", "0%", "100%"],
            transition: {
                delay,
                duration: 4, 
                times: [0, 0.3, .7, 1],
                ease: [.75,0,.17,1],
                type: "tween"
            }
        }
    )
}

export const logoAni = (x = "100px") => {
    return (
        {
            opacity: [0, 1, 1, 0], 
            x, 
            transition: {
                delay: .6,
                times: [0, 0.2, 0.8, 1],
                ease: easing,
                duration: 3.5
            }
        }
    )
}

export const logoAniOnce = (x = "100px") => {
    return (
        {
            opacity: 1, 
            x, 
            transition: {
                delay: 1.6,
                ease: easing,
                duration: 2 
            }
        }
    )
}
// logo animaions end


// slider animaions start
export const coverSlideSlider = (

        delay = 0,
        duration = .5, 
        ease = easing, 
        type = "tween"

    ) => {
    return (
        {
            initial: {
                scaleY: 1.4,
                scaleX: 1.1,
                y: 0,
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            },
            animate: {
                y: "-130%",
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            }
        }
    )
}

export const textSlideUpSlider = (

        delay = 0,
        duration = .5, 
        ease = easing, 
        type = "tween"

    ) => {
            
    return (
        {
            initial: {
                y: "110%",
                transition: {
                    delay,
                    duration,
                    ease,
                    type
                }
            },
            animate: {
                y: 0,
                transition: {
                    delay,
                    duration,
                    ease: easing,
                    type
                }
            }
        }
    )
}

// slider animaions end


const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};