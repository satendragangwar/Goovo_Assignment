import React, { useState } from "react";
import {
  Upload,
  Mic,
  Phone,
  Calendar,
  ChevronDown,
  Contact,
  IndentIcon,
  VideoIcon,
  Videotape,
  PlaySquareIcon,
} from "lucide-react";
import Img from './Screenshot 2025-02-17 at 12.00.59 AM.png'
function App() {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");
  const [eventType, setEventType] = useState("");
  const [venueName, setVenueName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [terms, setTerms] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [tieredPricing, setTieredPricing] = useState([
    { name: "", price: "", deadline: "", seats: "" },
  ]);
  const [isVisible, setIsVisible] = useState(true);

  const addTier = () => {
    setTieredPricing([
      ...tieredPricing,
      { name: "", price: "", deadline: "", seats: "" },
    ]);
  };

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex flex-col justify-center items-center ">
          <div className="bg-white text-black  h-[50px] w-[500px] mt-7 flex justify-between items-center px-4 rounded-md">
            Verify your Email{" "}
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gradient-to-b from-[#0E9CBD] to-[#1DE771] text-white text-[12px] w-[60px] h-[30px] rounded-md"
            >
              Verify
            </button>
          </div>
          <div className="bg-white text-black  h-[50px] w-[500px] mt-5 flex justify-between items-center px-4 rounded-md">
            Verify your Mobile{" "}
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gradient-to-b from-[#0E9CBD] to-[#1DE771] text-white text-[12px] w-[60px] h-[30px] rounded-md"
            >
              Verify
            </button>
          </div>
        </div>
      ) : null}

      <div className="min-h-screen font-outfit bg-black text-white">
        {/* Navigation */}
        <nav className="border-b border-gray-800 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center gap-4 sm:gap-7">
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-400"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-400"
            >
              Reports
            </a>
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-400"
            >
              History
            </a>
            <a
              href="#"
              className="bg-gradient-to-t from-[#0E9CBD] to-[#1DE771] bg-clip-text text-transparent font-bold text-sm sm:text-lg"
            >
              Create Event
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold  text-center mb-2">
            Create an Event
          </h1>
          <p className="text-center text-white mb-12">
            Enter your event details
          </p>

          <div className="space-y-12">
            {/* Event Details */}
            <section>
              <h2 className="text-xl mb-6">Event Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white mb-2">
                    Event Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      placeholder="Enter event name"
                    />
                    <Contact
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Event name limit is 50 letters
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">
                    Event Category
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      value={eventCategory}
                      onChange={(e) => setEventCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="music">Music</option>
                      <option value="sports">Sports</option>
                      <option value="arts">Arts</option>
                    </select>
                    {/* <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    /> */}
                  </div>
                </div>
              </div>
            </section>

            {/* Event Cards */}
            <section>
              <h2 className="text-xl mb-6">Event Cards</h2>
              <div className="space-y-4">
                <div className="flex justify-between flex-col md:flex-row gap-6 w-full">
                  {/* First Div (Uploader) */}
                  <div className="border bg-[#1E2524] border-gray-800 rounded-lg p-6 text-center md:w-full flex flex-col items-center justify-center">
                    <Upload className="mx-auto mb-4" size={24} />
                    <p className="text-sm text-gray-400">
                      Click to upload thumbnail
                    </p>
                    <div className="mt-4 flex justify-center space-x-2">
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                        PNG
                      </span>
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                        JPEG
                      </span>
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                        &lt;5.0MB
                      </span>
                    </div>
                  </div>

                  {/* Second Div (Same Size) */}
                  <div className="border border-gray-800 bg-black rounded-lg md:w-full text-center h-[200px] flex items-center justify-center">
                    <img className="h-16 mb-24" src={Img} alt="" />
                  </div>
                </div>

                <div className="flex items-center ">
                  <input type="checkbox" className="mr-2 border-[#0E9CBD] " />
                  <span className="text-[13px]">Display title on the Card</span>
                </div>

                {/* <div className="border border-gray-800 rounded-lg p-6"> */}
                <div className="aspect-video bg-black border bg-[#1E2524] border-white rounded-lg flex items-center justify-center">
                  <p className="text-lg text-gray-500 mt-4 flex items-center justify-center flex-col">
                    <PlaySquareIcon className="text-gray-600 mt-9" size={24} />
                    Click to upload a video
                    <div className="mt-24 mb-10  flex justify-center space-x-2">
                      <span className="text-sm text-white bg-gray-600 px-2 py-1 rounded">
                        PDF
                      </span>
                      <span className="text-sm  text-white bg-gray-600   px-2 py-1 rounded">
                        DOC
                      </span>
                      <span className="text-sm  text-white bg-gray-600  px-2 py-1 rounded">
                        &lt;5.0MB
                      </span>
                    </div>
                  </p>
                </div>

                {/* </div> */}
                <p className="text-sm">
                  We require event images in both vertical (portrait) and
                  horizontal (landscape) formats*
                </p>
                {/* <div className="border border-gray-800 rounded-lg p-6"> */}
                <div className="aspect-video bg-black border bg-[#1E2524] border-white rounded-lg flex items-center justify-center">
                  <p className="text-lg text-gray-500 mt-4 flex items-center justify-center flex-col">
                    <PlaySquareIcon className="text-gray-600 mt-9" size={24} />
                    Click to upload a video
                    <div className="mt-24 mb-10  flex justify-center space-x-2">
                      <span className="text-sm text-white bg-gray-600 px-2 py-1 rounded">
                        MOV
                      </span>
                      <span className="text-sm  text-white bg-gray-600   px-2 py-1 rounded">
                        MP4
                      </span>
                      <span className="text-sm  text-white bg-gray-600  px-2 py-1 rounded">
                        &lt;5.0MB
                      </span>
                    </div>
                  </p>
                </div>

                {/* </div> */}
              </div>
            </section>

            {/* Event Description */}
            <section>
              <h2 className="text-xl mb-6">Event Description</h2>
              <textarea
                className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2 h-32"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Event Description"
              ></textarea>
            </section>

            {/* Date and Time */}
            <section className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Calendar
                    className="absolute right-4 top-4 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Calendar
                    className="absolute right-4 top-4 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
            </section>

            {/* Registration Deadline and Event Type */}
            <section className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm ttext-white mb-2">
                  Registration Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                    value={registrationDeadline}
                    onChange={(e) => setRegistrationDeadline(e.target.value)}
                  />
                  <Calendar
                    className="absolute right-4 top-4 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2">
                  Event Type
                </label>
                <div className="relative">
                  <select
                    
                    className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  {/* <ChevronDown
                    className="absolute right-3 top-3 text-gray-400"
                    size={16}
                  /> */}
                </div>
              </div>
            </section>

            {/* Venue Details */}
            <section className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white mb-2">
                  Venue Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                  value={venueName}
                  onChange={(e) => setVenueName(e.target.value)}
                  placeholder="Enter Venue"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2">City</label>
                <input
                  type="text"
                  className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Add Region"
                />
              </div>
            </section>

            {/* Tiered Pricing Options */}
            <section>
              <h2 className="text-xl mb-6">Tiered Pricing Options</h2>
              {tieredPricing.map((tier, index) => (
                <div key={index} className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm ttext-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      placeholder="e.g. Early Bird"
                      value={tier.name}
                      onChange={(e) => {
                        const newTiers = [...tieredPricing];
                        newTiers[index].name = e.target.value;
                        setTieredPricing(newTiers);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm ttext-white mb-2">
                      Price per Ticket
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      placeholder="Enter Amount"
                      value={tier.price}
                      onChange={(e) => {
                        const newTiers = [...tieredPricing];
                        newTiers[index].price = e.target.value;
                        setTieredPricing(newTiers);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Availability Deadline
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                        value={tier.deadline}
                        onChange={(e) => {
                          const newTiers = [...tieredPricing];
                          newTiers[index].deadline = e.target.value;
                          setTieredPricing(newTiers);
                        }}
                      />
                      <Calendar
                        className="absolute right-4 top-4 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Seats
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      placeholder="Limited seats"
                      value={tier.seats}
                      onChange={(e) => {
                        const newTiers = [...tieredPricing];
                        newTiers[index].seats = e.target.value;
                        setTieredPricing(newTiers);
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="flex justify-between mb-20">
              <button
                onClick={addTier}
                className="px-6 w-[150px]  py-2 border  border-[#58E9D6]  bg-black text-white rounded-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                <span className="mr-2">+</span> Add More
              </button>
              <button className="px-6 w-[100px]  py-2 shadow-sm shadow-[#58E9D6] bg-black text-white rounded-lg hover:bg-green-500 hover:text-white transition-colors">
    Preview
  </button>
              </div>
             
            </section>

            {/* Point of Contact */}
            <section>
              <h2 className="text-xl mb-6">Point of Contact</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white mb-2">
                    Organizer Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      value={organizerName}
                      onChange={(e) => setOrganizerName(e.target.value)}
                      placeholder="Name"
                    />
                    <Mic
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full bg-[#1E2524] border border-gray-800 rounded-md px-4 py-2"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="(XXX) XXX - XXXX"
                    />
                    <Phone
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Terms and Conditions */}
            <section>
              <h2 className="text-xl mb-6">Terms and Conditions</h2>
              <textarea
                className="w-full bg-[#1E2524] border text-sm border-gray-800 rounded-md px-4 py-2 h-60"
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                placeholder=" 
. Tickets are non-refundable after [specific date]
. The organizer is not liable for personal belongings during the event.
. Participants must be 18+ years old.
. Respect other attendees and adhere to event-specific dress codes.
. Venue has been inspected for fire safety compliance.
. Permits for large gatherings are secured"
              ></textarea>
            </section>

            {/* Privacy Setting */}
            <section className="flex items-center bg-[#1E2524] rounded-md h-14 p-5 justify-between">
              <span className="text-white">Set Event to private</span>
              <label className="relative inline-flex items-center cursor-pointer border border-white rounded-[100px]">
                <input
                  type="checkbox"
                  className="sr-only peer "
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                />
                <div className="w-11 h-6 bg-[#1E2524] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </section>

            {/* Action Buttons */}
            <section className="flex flex-col items-end pt-6 h-full">
  <button className="px-6 w-[150px] py-2 border bg-[#1E2524] border-[#58E9D6] text-white rounded-lg hover:bg-green-500 hover:text-white transition-colors">
    Add Section
  </button>
  <button className="px-6 w-[100px]  py-2 shadow-sm shadow-[#58E9D6] bg-black text-white rounded-lg hover:bg-green-500 hover:text-white transition-colors mt-36 mb-11">
    Preview
  </button>
</section>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
