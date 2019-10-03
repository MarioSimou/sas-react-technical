import { getMembers, getMessages } from "./data";

export default async function getChatLog() {
  const [members, messages] = await Promise.all([getMembers(), getMessages()]);

  const doMapping = members => message => ({
    messageId: message.id,
    userId: message.userId,
    fullName: `${members[message.userId].firstName} ${members[message.userId].lastName}`,
    timestamp: message.timestamp,
    email: members[message.userId].email,
    message: message.message,
    avatar: members[message.userId].avatar
  });

  const membersHash = members.reduce(
    (acc, member) => ({ ...acc, [member.id]: member }),
    {}
  );

  return messages
    .map(doMapping(membersHash))
    .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1));
}
