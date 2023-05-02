export default function ConfirmationPopup({ onConfirm, onCancel, type }) {
  function typeStyle (type) {
    switch (type) {
      case "chatArchive":
        return {title: "Please confirm to archive  your chat",color: "blossom-500"}
    }
  }
  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-50 absolute inset-0 z-10"></div>
      <div className="bg-white p-6 rounded-xl shadow-lg z-30">
        <h3 className={`text-lg font-bold text-${typeStyle(type).color} mb-4 `}>
          {typeStyle(type).title}
        </h3>
        <div className="flex justify-center space-x-4">
          <button
            className={`bg-${typeStyle(type).color} text-white py-1 px-4 rounded-full focus:outline-none`}
            onClick={onConfirm}
          >
            Archive
          </button>
          <button
            className={`bg-gray-200 text-${typeStyle(type).color} py-1 px-4 rounded-full focus:outline-none"`}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
