import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>
      
      <div className="mt-4">
        <p className="text-gray-600">📧 {email}</p>
        <p className="text-gray-600">📞 {phone}</p>
        <p className="text-gray-600">🌐 {website}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">🏢 {company.name}</h3>
        <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          📍 {address.street}, {address.suite}, {address.city} {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
