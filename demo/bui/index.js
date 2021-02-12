const DRAWING = true
const NOT_DRAWING = false
let isDrawing = NOT_DRAWING
let lastPosition = {}
let tempPositions = []
let positionList = []

function addPosition(start, end, list) {
    list.push({
        start,
        end
    })
}

function mouseDown(e) {
    isDrawing = DRAWING
    lastPosition = getOffsetPosition(e)
}

function mouseMove(e) {
    if (isDrawing === DRAWING) {
        const endPosition = getOffsetPosition(e)
        draw(ctx, lastPosition, endPosition)
        addPosition(lastPosition, endPosition, tempPositions)
        lastPosition = endPosition
    }
}

function mouseUp(e) {
    isDrawing = NOT_DRAWING
    lastPosition = getOffsetPosition(e)
}

function getOffsetPosition(e) {
    return { x: e.offsetX, y: e.offsetY }
}

function draw(ctx, startPosition, endPosition) {
    const { x: sx, y: sy } = startPosition
    ctx.moveTo(sx, sy)
    const { x: ex, y: ey } = endPosition
    ctx.lineTo(ex, ey)
    ctx.stroke()
}

function onSaveButtonClick() {
    positionList.push([tempPositions])
    tempPositions = []
}

function onResetButtonClick() {
    positionList = []
    tempPositions = []
    bui.height = 500
    ctx.lineWidth = 3
}

function onBackButtonClick() {
    tempPositions = []
    bui.height = 500
    ctx.lineWidth = 3
        //读取positionList重新渲染
    const arr = positionList.flat(Infinity)
    arr.forEach(val => {
        draw(ctx, val.start, val.end)
    })
}

function onRenderButtonClick() {
    check()
    const arr = positionList.flat(Infinity)
    let index = 0

    function renderFn() {
        if (arr[index]) {
            requestAnimationFrame(() => {
                draw(renderCtx, arr[index].start, arr[index].end)
                index++
                renderFn()
            })
        }
    }
    renderFn()
}

function check() {
    if (tempPositions.length) {
        positionList.push([tempPositions])
        tempPositions = []
    }
}

const bui = document.querySelector('#bui')
const renderCanvas = document.querySelector('#renderCanvas')
const save = document.querySelector('#save')
const reset = document.querySelector('#reset')
const back = document.querySelector('#back')
const render = document.querySelector('#render')

var ctx = bui.getContext("2d")
ctx.lineWidth = 3
var renderCtx = renderCanvas.getContext('2d')
renderCtx.lineWidth = 3
bui.addEventListener('mousedown', mouseDown)
bui.addEventListener('mousemove', mouseMove)
bui.addEventListener('mouseup', mouseUp)

save.addEventListener('click', onSaveButtonClick)
reset.addEventListener('click', onResetButtonClick)
back.addEventListener('click', onBackButtonClick)
render.addEventListener('click', onRenderButtonClick)