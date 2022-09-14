\*\*Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
Sol : pass an inline function : onClose={setopenModal(false)} ----> onClose={() => setopenModal(false)}

\*\*always surrond jsx inside a modal in a div like this :
<Modal
disableRestoreFocus
open={openModal}
onClose={() => setopenModal(false)} >

<div>ok</div>
</Modal>

\*\*
