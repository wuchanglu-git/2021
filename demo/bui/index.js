const DRAWING = true
const NOT_DRAWING = false
let isDrawing = NOT_DRAWING
let lastPosition = {}
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
        addPosition(lastPosition, endPosition, positionList)
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
    console.log(JSON.stringify(positionList))
}

function onResetButtonClick() {
    positionList = []
    bui.height = 500
    ctx.lineWidth = 3
}

const bui = document.querySelector('#bui')
const save = document.querySelector('#save')
const reset = document.querySelector('#reset')


var ctx = bui.getContext("2d")
ctx.lineWidth = 3
bui.addEventListener('mousedown', mouseDown)
bui.addEventListener('mousemove', mouseMove)
bui.addEventListener('mouseup', mouseUp)

save.addEventListener('click', onSaveButtonClick)
reset.addEventListener('click', onResetButtonClick)