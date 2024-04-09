export default function MenuItem() {
    return (
        <div className="bg-extra p-4 rounded-lg text-center hover:bg-tertiary hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
            <img src="/cake.png" className="max-h-24 block mx-auto" alt="cake"/>
            </div>
            
            <h4 className="font-semibold text-xl my-3">Custom Cake</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectertur adipisicing elit
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart $15</button>


        </div>
    )
}