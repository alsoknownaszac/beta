

export default function ComposeMessage(){
    return (<>
        <div className="bg-white rounded-md p-3">
        <h4 className="font-bold my-2 py-2">New Message</h4>
        <form>
            <div className="form-group mb-3">
                <select className="w-full py-2 px-3 border rounded-sm" required>
                    <option value="" disabled>To</option>
                    <option value="2">Uzor Mercy (SPM)</option>
                </select>
               
            </div>
             <div className="form-group mb-3">
                <input type="email"  className="w-full py-2 px-3 border rounded-sm" placeholder="Subject" required />
            </div>
            <div className="form-group mb-3 pt-2">
                <textarea name="" className="w-full py-2 px-3 border rounded-sm" id="" cols="30" rows="10" placeholder="Message" required></textarea>
            </div>
            <div className="flex justify-end">
                <button className="py-1 px-4 bg-primary-light text-white rounded-sm " type="submit">Send</button>
            </div>
        </form>
    </div>
    </>)
}